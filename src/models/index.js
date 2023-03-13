// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const MedicalComprehensionType = {
  "DETECT_ENTITIES": "DETECT_ENTITIES",
  "INFER_RX_NORM": "INFER_RX_NORM",
  "INFER_ICD_10_CM": "INFER_ICD_10_CM",
  "INFER_SNOMED_CT": "INFER_SNOMED_CT",
  "DETECT_PHI": "DETECT_PHI"
};

const ContentType = {
  "HAND_WRITING": "HAND_WRITING",
  "PRINT": "PRINT",
  "DRAWING": "DRAWING",
  "IMAGE": "IMAGE",
  "HIGHLIGHT": "HIGHLIGHT",
  "SELECT_ONE": "SELECT_ONE",
  "SELECT_MULTIPLE": "SELECT_MULTIPLE"
};

const { User, Template, TemplateBlock, Document, DocumentBlock, UserActivity, RecordedNote, S3Object } = initSchema(schema);

export {
  User,
  Template,
  TemplateBlock,
  Document,
  DocumentBlock,
  UserActivity,
  RecordedNote,
  MedicalComprehensionType,
  ContentType,
  S3Object
};