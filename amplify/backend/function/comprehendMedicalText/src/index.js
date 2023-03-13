const ComprehensionType = require('./comprehension-type-enum');
const SOAPSummaryGenerator = require('./soap-summary-generator');
const SpeechToTextService = require('./speech-to-text-service');
const TextComprehensionService = require('./text-comprehension-service');

const comprehensionSvc = new TextComprehensionService();
const soapSummaryGenerator = new SOAPSummaryGenerator();
const transcribeSvc = new SpeechToTextService();

const resolvers = {
    Query: {
        async transcribeToMedicalSOAPNotes(event) {
            const text = await transcribeSvc.transcribe(event.arguments?.bucket, event.arguments?.region, event.arguments?.key, event.arguments?.cfg);
            console.log("Transcribed Text", text);
            let [entities, icd10Suggestions, rxNormSuggestions] = await Promise.all([
                comprehensionSvc.comprehendText(text, ComprehensionType.DETECT_ENTITIES),
                comprehensionSvc.comprehendText(text, ComprehensionType.INFER_ICD_10_CM),
                comprehensionSvc.comprehendText(text, ComprehensionType.INFER_RX_NORM)                
            ]);
            return { transcription: text, ...(await soapSummaryGenerator.generateSOAPSummary(entities, icd10Suggestions, rxNormSuggestions, event.arguments?.cfg)) };
        },
        async generateMedicalSOAPSummary(event) {
            let [entities, icd10Suggestions, rxNormSuggestions] = await Promise.all([
                comprehensionSvc.comprehendText(event.arguments?.text, ComprehensionType.DETECT_ENTITIES),
                comprehensionSvc.comprehendText(event.arguments?.text, ComprehensionType.INFER_ICD_10_CM),
                comprehensionSvc.comprehendText(event.arguments?.text, ComprehensionType.INFER_RX_NORM)           
            ]);
            return await soapSummaryGenerator.generateSOAPSummary(entities, icd10Suggestions, rxNormSuggestions, event.arguments?.cfg);
        },
        async interpretMedicalText(event) {
            return comprehensionSvc.comprehendText(event.arguments?.text, event.arguments?.operation)
        }
    }
};

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event, context, callback) => {
    const start = Date.now();
    console.log('event', JSON.stringify(event, null, 2));
    const typeHandler = resolvers[event.typeName];
    if (typeHandler) {
        const resolver = typeHandler[event.fieldName];
        if (resolver) {
            try {
                const resp = await resolver(event);
                console.log(`Returning response for ${event.typeName}.${event.fieldName}`, JSON.stringify(resp, null, 2));
                return resp;
            } catch (err) {
                console.error(err);
                return null;
            } finally {
                console.log(`Request time ${Date.now() - start}`);
            }
        }
    }
    console.log('Error: Query Resolver not found.');
    return null;
};
