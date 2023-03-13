class SOAPSummaryGenerator {

  constructor() {

  }

  async isAbsentDiagnosis(myArray) {
    return myArray.some((el) => el.Name === 'DIAGNOSIS') && myArray.some((el) => el.Name === 'NEGATION');
  }
  
  async isPresentDiagnosis(myArray) {
    return myArray.some((el) => el.Name === 'DIAGNOSIS') && !myArray.some((el) => el.Name === 'NEGATION');
  }
  
  async isPresentSymptom(myArray) {
    return myArray.some((el) => el.Name === 'SYMPTOM') && !myArray.some((el) => el.Name === 'NEGATION');
  }
  
  async isAbsentSymptom(myArray) {
    return myArray.some((el) => el.Name === 'SYMPTOM') && myArray.some((el) => el.Name === 'NEGATION');
  }

  async generateSOAPSummary(entities, medicalConditionSuggestions, medicationSuggestions, cfg) {
    let presentDiagnosedConditions = [],
      absentDiagnosedConditions = [],
      presentSymptomConditions = [],
      absentSymptomConditions = [];
  
    let medicalConditions = entities.filter((r) => r.Category === 'MEDICAL_CONDITION');
  
    for (let index = 0; index < medicalConditions.length; index++) {
      if (this.isPresentDiagnosis(medicalConditions[index].Traits)) {
        presentDiagnosedConditions.push(medicalConditions[index]);
      } else if (this.isAbsentDiagnosis(medicalConditions[index].Traits)) {
        absentSymptomConditions.push(medicalConditions[index]);
      } else if (this.isPresentSymptom(medicalConditions[index].Traits)) {
        presentSymptomConditions.push(medicalConditions[index]);
      } else if (this.isAbsentSymptom(medicalConditions[index].Traits)) {
        absentSymptomConditions.push(medicalConditions[index]);
      }
    }
  
    let medications = entities.filter((r) => r.Category === 'MEDICATION');
    let anatomy = entities.filter((r) => r.Category === 'ANATOMY');
    let testTreatmentProcedures = entities.filter((r) => r.Category === 'TEST_TREATMENT_PROCEDURE');
  
    let summary = { 
      subjective: {
        chiefMedicalComplaint: presentDiagnosedConditions.length > 0 ? presentDiagnosedConditions[presentDiagnosedConditions.length - 1] : null,
        history: {
          presentDiagnosedConditions,
          anatomy,
          presentSymptomConditions,
          absentSymptomConditions,
          medications,
          absentDiagnosedConditions
        },
        text: ''
      },
      objective: {
        text: ''
      },
      assessment: {
        presentDiagnosedConditions,
        absentDiagnosedConditions,
        text: ''
      },
      plan: {
        medications,
        testTreatmentProcedures,
        text: ''
      },
      entities,
      medicalConditionSuggestions,
      medicationSuggestions
    };
    let ixes = cfg?.ixes || false;
    let assessmentPrefix = ixes?.assessmentPrefix || '';
    let assessmentSuffix = ixes?.assessmentSuffix || '';
    summary.assessment.text = `Assessment:-\n\n${assessmentPrefix}Diagnosis:\n`;
    if (presentDiagnosedConditions.length > 0)
      summary.assessment.text +=
        'Patient is likely suffering from ' +
        [...new Set(presentDiagnosedConditions.map((r) => r.Text))].join(', ') +
        '. ';
    if (absentDiagnosedConditions.length > 0)
      summary.assessment.text +=
        'It is not likely that the patient is suffering from ' +
        [...new Set(absentDiagnosedConditions.map((r) => r.Text))].join(', ') +
        '. ';
    summary.assessment.text += assessmentSuffix;


    let planPrefix = ixes?.planPrefix || '';
    let planSuffix = ixes?.planSuffix || '';
    summary.plan.text = `Plan:-\n\n${planPrefix}`;
    if (medications.length > 0)
      summary.plan.text +=
        'The suggested plan is to take the following medication(s): \n' +
        [...new Set(medications.map((r) => r.Text))].join(', ') +
        '. ';
    if (testTreatmentProcedures.length > 0)
      summary.plan.text +=
        'The suggested treatment(s) to follow is below: \n' +
        [...new Set(testTreatmentProcedures.map((r) => r.Text))].join(', ') +
        '. ';
  
    summary.plan.text += planSuffix;
    

    let subjectivePrefix = ixes?.subjectivePrefix || '';
    let subjectiveSuffix = ixes?.subjectiveSuffix || '';
    summary.subjective.text = `Subjective:-\n\n${subjectivePrefix}`;
  
    summary.subjective.text += 'Chief Complaint(s):\n';
    if (presentDiagnosedConditions.length > 0)
      summary.subjective.text +=
        'Patient presents with ' + presentDiagnosedConditions[presentDiagnosedConditions.length - 1].Text + '.\n';
  
        summary.subjective.text += 'History of Patient Illness(s):\n';
    if (presentDiagnosedConditions.length > 0)
      summary.subjective.text += 'Patient is here for ' + [...new Set(presentDiagnosedConditions.map((r) => r.Text))].join(', ') + '. ';
    if (anatomy.length > 0)
      summary.subjective.text += 'Patient noted issues with: ' + [...new Set(anatomy.map((r) => r.Text))].join(', ');
    if (presentSymptomConditions.length > 0)
      summary.subjective.text += ' with symptoms like ' + [...new Set(presentSymptomConditions.map((r) => r.Text))].join(', ') + '. ';
    if (absentSymptomConditions.length > 0)
      summary.subjective.text +=
        'Additionally , noted no occurrences of ' +
        [...new Set(presentSymptomConditions.map((r) => r.Text))].join(', ') +
        '.';
    if (medications.length > 0)
      summary.subjective.text += 'Current medications include ' + [...new Set(medications.map((r) => r.Text))].join(', ') + '. ';
  
    if (absentDiagnosedConditions.length > 0)
      summary.subjective.text +=
        'It is not likely that the patient is sufferring from ' +
        [...new Set(absentDiagnosedConditions.map((r) => r.Text))].join(', ') +
        '. ';
  
    summary.subjective.text += subjectiveSuffix;


    let objectivePrefix = ixes?.objectivePrefix || '';
    let objectiveSuffix = ixes?.objectiveSuffix || '';
    summary.objective.text += `Objective:-\n\n${objectivePrefix}`;
    summary.objective.text += objectiveSuffix;

    return summary;
  }
}
module.exports = SOAPSummaryGenerator;
