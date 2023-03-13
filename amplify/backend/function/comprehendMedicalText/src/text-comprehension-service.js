const AWS = require('aws-sdk');
const ComprehensionType = require('./comprehension-type-enum');
const s3 = new AWS.S3();

class TextComprehensionService {

  comprehend = undefined;
  constructor() {
    this.comprehend = new AWS.ComprehendMedical();
  }

  async comprehendText(text, operation) {
    if (operation === ComprehensionType.DETECT_ENTITIES) {
      return (await this.comprehend.detectEntitiesV2({ Text: text }).promise())?.Entities;
    } else if (operation === ComprehensionType.INFER_RX_NORM) {
      return (await this.comprehend.inferRxNorm({ Text: text }).promise())?.Entities;
    } else if (operation === ComprehensionType.INFER_ICD_10_CM) {
      return (await this.comprehend.inferICD10CM({ Text: text }).promise())?.Entities;
    } else if (operation === ComprehensionType.INFER_SNOMED_CT) {
      return (await this.comprehend.inferSNOMEDCT({ Text: text }).promise())?.Entities;
    } else if (operation === ComprehensionType.DETECT_PHI) {
      return (await this.comprehend.detectPHI({ Text: text }).promise())?.Entities;
    } else {
      return null;
    }
  }
}
module.exports = TextComprehensionService;
