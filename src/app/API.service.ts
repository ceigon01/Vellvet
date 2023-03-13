/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation, GraphQLResult } from "@aws-amplify/api-graphql";
import { Observable } from "zen-observable-ts";

export interface SubscriptionResponse<T> {
  value: GraphQLResult<T>;
}

export type __SubscriptionContainer = {
  onCreateUser: OnCreateUserSubscription;
  onUpdateUser: OnUpdateUserSubscription;
  onDeleteUser: OnDeleteUserSubscription;
  onCreateTemplate: OnCreateTemplateSubscription;
  onUpdateTemplate: OnUpdateTemplateSubscription;
  onDeleteTemplate: OnDeleteTemplateSubscription;
  onCreateTemplateBlock: OnCreateTemplateBlockSubscription;
  onUpdateTemplateBlock: OnUpdateTemplateBlockSubscription;
  onDeleteTemplateBlock: OnDeleteTemplateBlockSubscription;
  onCreateDocument: OnCreateDocumentSubscription;
  onUpdateDocument: OnUpdateDocumentSubscription;
  onDeleteDocument: OnDeleteDocumentSubscription;
  onCreateRecordedNote: OnCreateRecordedNoteSubscription;
  onUpdateRecordedNote: OnUpdateRecordedNoteSubscription;
  onDeleteRecordedNote: OnDeleteRecordedNoteSubscription;
};

export type CreateUserInput = {
  id?: string | null;
  email: string;
  phone?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  nickName?: string | null;
  avatar?: string | null;
  timezone?: string | null;
  acceptedAgreements?: Array<string> | null;
  stripeId?: string | null;
  _version?: number | null;
};

export type ModelUserConditionInput = {
  email?: ModelStringInput | null;
  phone?: ModelStringInput | null;
  firstName?: ModelStringInput | null;
  lastName?: ModelStringInput | null;
  nickName?: ModelStringInput | null;
  avatar?: ModelStringInput | null;
  timezone?: ModelStringInput | null;
  acceptedAgreements?: ModelStringInput | null;
  stripeId?: ModelStringInput | null;
  and?: Array<ModelUserConditionInput | null> | null;
  or?: Array<ModelUserConditionInput | null> | null;
  not?: ModelUserConditionInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null"
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type User = {
  __typename: "User";
  id: string;
  email: string;
  phone?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  nickName?: string | null;
  avatar?: string | null;
  timezone?: string | null;
  acceptedAgreements?: Array<string> | null;
  stripeId?: string | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  owner?: string | null;
};

export type UpdateUserInput = {
  id: string;
  email?: string | null;
  phone?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  nickName?: string | null;
  avatar?: string | null;
  timezone?: string | null;
  acceptedAgreements?: Array<string> | null;
  stripeId?: string | null;
  _version?: number | null;
};

export type DeleteUserInput = {
  id: string;
  _version?: number | null;
};

export type CreateTemplateInput = {
  id?: string | null;
  name: string;
  fileArn?: string | null;
  editors?: Array<string> | null;
  viewers?: Array<string> | null;
  file?: S3ObjectInput | null;
  _version?: number | null;
};

export type S3ObjectInput = {
  bucket: string;
  region: string;
  key: string;
};

export type ModelTemplateConditionInput = {
  name?: ModelStringInput | null;
  fileArn?: ModelStringInput | null;
  editors?: ModelStringInput | null;
  viewers?: ModelStringInput | null;
  and?: Array<ModelTemplateConditionInput | null> | null;
  or?: Array<ModelTemplateConditionInput | null> | null;
  not?: ModelTemplateConditionInput | null;
};

export type Template = {
  __typename: "Template";
  id: string;
  name: string;
  fileArn?: string | null;
  blocks?: ModelTemplateBlockConnection | null;
  editors?: Array<string> | null;
  viewers?: Array<string> | null;
  file?: S3Object | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  owner?: string | null;
};

export type ModelTemplateBlockConnection = {
  __typename: "ModelTemplateBlockConnection";
  items: Array<TemplateBlock | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type TemplateBlock = {
  __typename: "TemplateBlock";
  id: string;
  name: string;
  template: Template;
  tlx: number;
  tly: number;
  trx: number;
  try: number;
  blx: number;
  bly: number;
  brx: number;
  bry: number;
  contentType: ContentType;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  templateBlocksId?: string | null;
  owner?: string | null;
};

export enum ContentType {
  HAND_WRITING = "HAND_WRITING",
  PRINT = "PRINT",
  DRAWING = "DRAWING",
  IMAGE = "IMAGE",
  HIGHLIGHT = "HIGHLIGHT",
  SELECT_ONE = "SELECT_ONE",
  SELECT_MULTIPLE = "SELECT_MULTIPLE"
}

export type S3Object = {
  __typename: "S3Object";
  bucket: string;
  region: string;
  key: string;
};

export type UpdateTemplateInput = {
  id: string;
  name?: string | null;
  fileArn?: string | null;
  editors?: Array<string> | null;
  viewers?: Array<string> | null;
  file?: S3ObjectInput | null;
  _version?: number | null;
};

export type DeleteTemplateInput = {
  id: string;
  _version?: number | null;
};

export type CreateTemplateBlockInput = {
  id?: string | null;
  name: string;
  tlx: number;
  tly: number;
  trx: number;
  try: number;
  blx: number;
  bly: number;
  brx: number;
  bry: number;
  contentType: ContentType;
  _version?: number | null;
  templateBlocksId?: string | null;
};

export type ModelTemplateBlockConditionInput = {
  name?: ModelStringInput | null;
  tlx?: ModelFloatInput | null;
  tly?: ModelFloatInput | null;
  trx?: ModelFloatInput | null;
  try?: ModelFloatInput | null;
  blx?: ModelFloatInput | null;
  bly?: ModelFloatInput | null;
  brx?: ModelFloatInput | null;
  bry?: ModelFloatInput | null;
  contentType?: ModelContentTypeInput | null;
  and?: Array<ModelTemplateBlockConditionInput | null> | null;
  or?: Array<ModelTemplateBlockConditionInput | null> | null;
  not?: ModelTemplateBlockConditionInput | null;
  templateBlocksId?: ModelIDInput | null;
};

export type ModelFloatInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type ModelContentTypeInput = {
  eq?: ContentType | null;
  ne?: ContentType | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type UpdateTemplateBlockInput = {
  id: string;
  name?: string | null;
  tlx?: number | null;
  tly?: number | null;
  trx?: number | null;
  try?: number | null;
  blx?: number | null;
  bly?: number | null;
  brx?: number | null;
  bry?: number | null;
  contentType?: ContentType | null;
  _version?: number | null;
  templateBlocksId?: string | null;
};

export type DeleteTemplateBlockInput = {
  id: string;
  _version?: number | null;
};

export type CreateDocumentInput = {
  arn: string;
  name: string;
  editors?: Array<string> | null;
  viewers?: Array<string> | null;
  file?: S3ObjectInput | null;
  _version?: number | null;
  documentTemplateId?: string | null;
};

export type ModelDocumentConditionInput = {
  name?: ModelStringInput | null;
  editors?: ModelStringInput | null;
  viewers?: ModelStringInput | null;
  and?: Array<ModelDocumentConditionInput | null> | null;
  or?: Array<ModelDocumentConditionInput | null> | null;
  not?: ModelDocumentConditionInput | null;
  documentTemplateId?: ModelIDInput | null;
};

export type Document = {
  __typename: "Document";
  arn: string;
  name: string;
  template?: Template | null;
  blocks?: ModelDocumentBlockConnection | null;
  editors?: Array<string> | null;
  viewers?: Array<string> | null;
  file?: S3Object | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  documentTemplateId?: string | null;
  owner?: string | null;
};

export type ModelDocumentBlockConnection = {
  __typename: "ModelDocumentBlockConnection";
  items: Array<DocumentBlock | null>;
  nextToken?: string | null;
};

export type DocumentBlock = {
  __typename: "DocumentBlock";
  id: string;
  name: string;
  template?: Template | null;
  templateBlock?: TemplateBlock | null;
  tlx?: number | null;
  tly?: number | null;
  trx?: number | null;
  try?: number | null;
  blx?: number | null;
  bly?: number | null;
  brx?: number | null;
  bry?: number | null;
  contentType: ContentType;
  originalContent?: string | null;
  parsedContent?: string | null;
  correctedContent?: string | null;
  corrections?: ModelUserActivityConnection | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  documentBlocksArn?: string | null;
  documentBlockTemplateId?: string | null;
  documentBlockTemplateBlockId?: string | null;
  owner?: string | null;
};

export type ModelUserActivityConnection = {
  __typename: "ModelUserActivityConnection";
  items: Array<UserActivity | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type UserActivity = {
  __typename: "UserActivity";
  id: string;
  userID: string;
  activity: string;
  tags?: Array<string | null> | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  documentBlockCorrectionsId?: string | null;
  owner?: string | null;
};

export type UpdateDocumentInput = {
  arn: string;
  name?: string | null;
  editors?: Array<string> | null;
  viewers?: Array<string> | null;
  file?: S3ObjectInput | null;
  _version?: number | null;
  documentTemplateId?: string | null;
};

export type DeleteDocumentInput = {
  arn: string;
  _version?: number | null;
};

export type CreateRecordedNoteInput = {
  id?: string | null;
  name: string;
  editors?: Array<string> | null;
  viewers?: Array<string> | null;
  recording?: S3ObjectInput | null;
  transcription?: string | null;
  comprehension?: string | null;
  _version?: number | null;
};

export type ModelRecordedNoteConditionInput = {
  name?: ModelStringInput | null;
  editors?: ModelStringInput | null;
  viewers?: ModelStringInput | null;
  transcription?: ModelStringInput | null;
  comprehension?: ModelStringInput | null;
  and?: Array<ModelRecordedNoteConditionInput | null> | null;
  or?: Array<ModelRecordedNoteConditionInput | null> | null;
  not?: ModelRecordedNoteConditionInput | null;
};

export type RecordedNote = {
  __typename: "RecordedNote";
  id: string;
  name: string;
  editors?: Array<string> | null;
  viewers?: Array<string> | null;
  recording?: S3Object | null;
  transcription?: string | null;
  comprehension?: string | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  owner?: string | null;
};

export type UpdateRecordedNoteInput = {
  id: string;
  name?: string | null;
  editors?: Array<string> | null;
  viewers?: Array<string> | null;
  recording?: S3ObjectInput | null;
  transcription?: string | null;
  comprehension?: string | null;
  _version?: number | null;
};

export type DeleteRecordedNoteInput = {
  id: string;
  _version?: number | null;
};

export enum MedicalComprehensionType {
  DETECT_ENTITIES = "DETECT_ENTITIES",
  INFER_RX_NORM = "INFER_RX_NORM",
  INFER_ICD_10_CM = "INFER_ICD_10_CM",
  INFER_SNOMED_CT = "INFER_SNOMED_CT",
  DETECT_PHI = "DETECT_PHI"
}

export type ModelUserFilterInput = {
  id?: ModelIDInput | null;
  email?: ModelStringInput | null;
  phone?: ModelStringInput | null;
  firstName?: ModelStringInput | null;
  lastName?: ModelStringInput | null;
  nickName?: ModelStringInput | null;
  avatar?: ModelStringInput | null;
  timezone?: ModelStringInput | null;
  acceptedAgreements?: ModelStringInput | null;
  stripeId?: ModelStringInput | null;
  and?: Array<ModelUserFilterInput | null> | null;
  or?: Array<ModelUserFilterInput | null> | null;
  not?: ModelUserFilterInput | null;
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection";
  items: Array<User | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type ModelTemplateFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  fileArn?: ModelStringInput | null;
  editors?: ModelStringInput | null;
  viewers?: ModelStringInput | null;
  and?: Array<ModelTemplateFilterInput | null> | null;
  or?: Array<ModelTemplateFilterInput | null> | null;
  not?: ModelTemplateFilterInput | null;
};

export type ModelTemplateConnection = {
  __typename: "ModelTemplateConnection";
  items: Array<Template | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type ModelTemplateBlockFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  tlx?: ModelFloatInput | null;
  tly?: ModelFloatInput | null;
  trx?: ModelFloatInput | null;
  try?: ModelFloatInput | null;
  blx?: ModelFloatInput | null;
  bly?: ModelFloatInput | null;
  brx?: ModelFloatInput | null;
  bry?: ModelFloatInput | null;
  contentType?: ModelContentTypeInput | null;
  and?: Array<ModelTemplateBlockFilterInput | null> | null;
  or?: Array<ModelTemplateBlockFilterInput | null> | null;
  not?: ModelTemplateBlockFilterInput | null;
  templateBlocksId?: ModelIDInput | null;
};

export type ModelDocumentFilterInput = {
  arn?: ModelStringInput | null;
  name?: ModelStringInput | null;
  editors?: ModelStringInput | null;
  viewers?: ModelStringInput | null;
  and?: Array<ModelDocumentFilterInput | null> | null;
  or?: Array<ModelDocumentFilterInput | null> | null;
  not?: ModelDocumentFilterInput | null;
  documentTemplateId?: ModelIDInput | null;
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC"
}

export type ModelDocumentConnection = {
  __typename: "ModelDocumentConnection";
  items: Array<Document | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type ModelRecordedNoteFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  editors?: ModelStringInput | null;
  viewers?: ModelStringInput | null;
  transcription?: ModelStringInput | null;
  comprehension?: ModelStringInput | null;
  and?: Array<ModelRecordedNoteFilterInput | null> | null;
  or?: Array<ModelRecordedNoteFilterInput | null> | null;
  not?: ModelRecordedNoteFilterInput | null;
};

export type ModelRecordedNoteConnection = {
  __typename: "ModelRecordedNoteConnection";
  items: Array<RecordedNote | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type ModelUserActivityFilterInput = {
  id?: ModelIDInput | null;
  userID?: ModelIDInput | null;
  activity?: ModelStringInput | null;
  tags?: ModelStringInput | null;
  and?: Array<ModelUserActivityFilterInput | null> | null;
  or?: Array<ModelUserActivityFilterInput | null> | null;
  not?: ModelUserActivityFilterInput | null;
  documentBlockCorrectionsId?: ModelIDInput | null;
};

export type ModelSubscriptionUserFilterInput = {
  email?: ModelSubscriptionStringInput | null;
  phone?: ModelSubscriptionStringInput | null;
  firstName?: ModelSubscriptionStringInput | null;
  lastName?: ModelSubscriptionStringInput | null;
  nickName?: ModelSubscriptionStringInput | null;
  avatar?: ModelSubscriptionStringInput | null;
  timezone?: ModelSubscriptionStringInput | null;
  acceptedAgreements?: ModelSubscriptionStringInput | null;
  stripeId?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionUserFilterInput | null> | null;
  or?: Array<ModelSubscriptionUserFilterInput | null> | null;
};

export type ModelSubscriptionStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  in?: Array<string | null> | null;
  notIn?: Array<string | null> | null;
};

export type ModelSubscriptionTemplateFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  name?: ModelSubscriptionStringInput | null;
  fileArn?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionTemplateFilterInput | null> | null;
  or?: Array<ModelSubscriptionTemplateFilterInput | null> | null;
};

export type ModelSubscriptionIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  in?: Array<string | null> | null;
  notIn?: Array<string | null> | null;
};

export type ModelSubscriptionTemplateBlockFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  name?: ModelSubscriptionStringInput | null;
  tlx?: ModelSubscriptionFloatInput | null;
  tly?: ModelSubscriptionFloatInput | null;
  trx?: ModelSubscriptionFloatInput | null;
  try?: ModelSubscriptionFloatInput | null;
  blx?: ModelSubscriptionFloatInput | null;
  bly?: ModelSubscriptionFloatInput | null;
  brx?: ModelSubscriptionFloatInput | null;
  bry?: ModelSubscriptionFloatInput | null;
  contentType?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionTemplateBlockFilterInput | null> | null;
  or?: Array<ModelSubscriptionTemplateBlockFilterInput | null> | null;
};

export type ModelSubscriptionFloatInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  in?: Array<number | null> | null;
  notIn?: Array<number | null> | null;
};

export type ModelSubscriptionDocumentFilterInput = {
  arn?: ModelSubscriptionStringInput | null;
  name?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionDocumentFilterInput | null> | null;
  or?: Array<ModelSubscriptionDocumentFilterInput | null> | null;
};

export type ModelSubscriptionRecordedNoteFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  name?: ModelSubscriptionStringInput | null;
  transcription?: ModelSubscriptionStringInput | null;
  comprehension?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionRecordedNoteFilterInput | null> | null;
  or?: Array<ModelSubscriptionRecordedNoteFilterInput | null> | null;
};

export type CreateUserMutation = {
  __typename: "User";
  id: string;
  email: string;
  phone?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  nickName?: string | null;
  avatar?: string | null;
  timezone?: string | null;
  acceptedAgreements?: Array<string> | null;
  stripeId?: string | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  owner?: string | null;
};

export type UpdateUserMutation = {
  __typename: "User";
  id: string;
  email: string;
  phone?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  nickName?: string | null;
  avatar?: string | null;
  timezone?: string | null;
  acceptedAgreements?: Array<string> | null;
  stripeId?: string | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  owner?: string | null;
};

export type DeleteUserMutation = {
  __typename: "User";
  id: string;
  email: string;
  phone?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  nickName?: string | null;
  avatar?: string | null;
  timezone?: string | null;
  acceptedAgreements?: Array<string> | null;
  stripeId?: string | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  owner?: string | null;
};

export type CreateTemplateMutation = {
  __typename: "Template";
  id: string;
  name: string;
  fileArn?: string | null;
  blocks?: {
    __typename: "ModelTemplateBlockConnection";
    items: Array<{
      __typename: "TemplateBlock";
      id: string;
      name: string;
      tlx: number;
      tly: number;
      trx: number;
      try: number;
      blx: number;
      bly: number;
      brx: number;
      bry: number;
      contentType: ContentType;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      templateBlocksId?: string | null;
      owner?: string | null;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  editors?: Array<string> | null;
  viewers?: Array<string> | null;
  file?: {
    __typename: "S3Object";
    bucket: string;
    region: string;
    key: string;
  } | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  owner?: string | null;
};

export type UpdateTemplateMutation = {
  __typename: "Template";
  id: string;
  name: string;
  fileArn?: string | null;
  blocks?: {
    __typename: "ModelTemplateBlockConnection";
    items: Array<{
      __typename: "TemplateBlock";
      id: string;
      name: string;
      tlx: number;
      tly: number;
      trx: number;
      try: number;
      blx: number;
      bly: number;
      brx: number;
      bry: number;
      contentType: ContentType;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      templateBlocksId?: string | null;
      owner?: string | null;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  editors?: Array<string> | null;
  viewers?: Array<string> | null;
  file?: {
    __typename: "S3Object";
    bucket: string;
    region: string;
    key: string;
  } | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  owner?: string | null;
};

export type DeleteTemplateMutation = {
  __typename: "Template";
  id: string;
  name: string;
  fileArn?: string | null;
  blocks?: {
    __typename: "ModelTemplateBlockConnection";
    items: Array<{
      __typename: "TemplateBlock";
      id: string;
      name: string;
      tlx: number;
      tly: number;
      trx: number;
      try: number;
      blx: number;
      bly: number;
      brx: number;
      bry: number;
      contentType: ContentType;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      templateBlocksId?: string | null;
      owner?: string | null;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  editors?: Array<string> | null;
  viewers?: Array<string> | null;
  file?: {
    __typename: "S3Object";
    bucket: string;
    region: string;
    key: string;
  } | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  owner?: string | null;
};

export type CreateTemplateBlockMutation = {
  __typename: "TemplateBlock";
  id: string;
  name: string;
  template: {
    __typename: "Template";
    id: string;
    name: string;
    fileArn?: string | null;
    blocks?: {
      __typename: "ModelTemplateBlockConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    editors?: Array<string> | null;
    viewers?: Array<string> | null;
    file?: {
      __typename: "S3Object";
      bucket: string;
      region: string;
      key: string;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    owner?: string | null;
  };
  tlx: number;
  tly: number;
  trx: number;
  try: number;
  blx: number;
  bly: number;
  brx: number;
  bry: number;
  contentType: ContentType;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  templateBlocksId?: string | null;
  owner?: string | null;
};

export type UpdateTemplateBlockMutation = {
  __typename: "TemplateBlock";
  id: string;
  name: string;
  template: {
    __typename: "Template";
    id: string;
    name: string;
    fileArn?: string | null;
    blocks?: {
      __typename: "ModelTemplateBlockConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    editors?: Array<string> | null;
    viewers?: Array<string> | null;
    file?: {
      __typename: "S3Object";
      bucket: string;
      region: string;
      key: string;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    owner?: string | null;
  };
  tlx: number;
  tly: number;
  trx: number;
  try: number;
  blx: number;
  bly: number;
  brx: number;
  bry: number;
  contentType: ContentType;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  templateBlocksId?: string | null;
  owner?: string | null;
};

export type DeleteTemplateBlockMutation = {
  __typename: "TemplateBlock";
  id: string;
  name: string;
  template: {
    __typename: "Template";
    id: string;
    name: string;
    fileArn?: string | null;
    blocks?: {
      __typename: "ModelTemplateBlockConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    editors?: Array<string> | null;
    viewers?: Array<string> | null;
    file?: {
      __typename: "S3Object";
      bucket: string;
      region: string;
      key: string;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    owner?: string | null;
  };
  tlx: number;
  tly: number;
  trx: number;
  try: number;
  blx: number;
  bly: number;
  brx: number;
  bry: number;
  contentType: ContentType;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  templateBlocksId?: string | null;
  owner?: string | null;
};

export type CreateDocumentMutation = {
  __typename: "Document";
  arn: string;
  name: string;
  template?: {
    __typename: "Template";
    id: string;
    name: string;
    fileArn?: string | null;
    blocks?: {
      __typename: "ModelTemplateBlockConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    editors?: Array<string> | null;
    viewers?: Array<string> | null;
    file?: {
      __typename: "S3Object";
      bucket: string;
      region: string;
      key: string;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    owner?: string | null;
  } | null;
  blocks?: {
    __typename: "ModelDocumentBlockConnection";
    items: Array<{
      __typename: "DocumentBlock";
      id: string;
      name: string;
      tlx?: number | null;
      tly?: number | null;
      trx?: number | null;
      try?: number | null;
      blx?: number | null;
      bly?: number | null;
      brx?: number | null;
      bry?: number | null;
      contentType: ContentType;
      originalContent?: string | null;
      parsedContent?: string | null;
      correctedContent?: string | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      documentBlocksArn?: string | null;
      documentBlockTemplateId?: string | null;
      documentBlockTemplateBlockId?: string | null;
      owner?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  editors?: Array<string> | null;
  viewers?: Array<string> | null;
  file?: {
    __typename: "S3Object";
    bucket: string;
    region: string;
    key: string;
  } | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  documentTemplateId?: string | null;
  owner?: string | null;
};

export type UpdateDocumentMutation = {
  __typename: "Document";
  arn: string;
  name: string;
  template?: {
    __typename: "Template";
    id: string;
    name: string;
    fileArn?: string | null;
    blocks?: {
      __typename: "ModelTemplateBlockConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    editors?: Array<string> | null;
    viewers?: Array<string> | null;
    file?: {
      __typename: "S3Object";
      bucket: string;
      region: string;
      key: string;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    owner?: string | null;
  } | null;
  blocks?: {
    __typename: "ModelDocumentBlockConnection";
    items: Array<{
      __typename: "DocumentBlock";
      id: string;
      name: string;
      tlx?: number | null;
      tly?: number | null;
      trx?: number | null;
      try?: number | null;
      blx?: number | null;
      bly?: number | null;
      brx?: number | null;
      bry?: number | null;
      contentType: ContentType;
      originalContent?: string | null;
      parsedContent?: string | null;
      correctedContent?: string | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      documentBlocksArn?: string | null;
      documentBlockTemplateId?: string | null;
      documentBlockTemplateBlockId?: string | null;
      owner?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  editors?: Array<string> | null;
  viewers?: Array<string> | null;
  file?: {
    __typename: "S3Object";
    bucket: string;
    region: string;
    key: string;
  } | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  documentTemplateId?: string | null;
  owner?: string | null;
};

export type DeleteDocumentMutation = {
  __typename: "Document";
  arn: string;
  name: string;
  template?: {
    __typename: "Template";
    id: string;
    name: string;
    fileArn?: string | null;
    blocks?: {
      __typename: "ModelTemplateBlockConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    editors?: Array<string> | null;
    viewers?: Array<string> | null;
    file?: {
      __typename: "S3Object";
      bucket: string;
      region: string;
      key: string;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    owner?: string | null;
  } | null;
  blocks?: {
    __typename: "ModelDocumentBlockConnection";
    items: Array<{
      __typename: "DocumentBlock";
      id: string;
      name: string;
      tlx?: number | null;
      tly?: number | null;
      trx?: number | null;
      try?: number | null;
      blx?: number | null;
      bly?: number | null;
      brx?: number | null;
      bry?: number | null;
      contentType: ContentType;
      originalContent?: string | null;
      parsedContent?: string | null;
      correctedContent?: string | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      documentBlocksArn?: string | null;
      documentBlockTemplateId?: string | null;
      documentBlockTemplateBlockId?: string | null;
      owner?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  editors?: Array<string> | null;
  viewers?: Array<string> | null;
  file?: {
    __typename: "S3Object";
    bucket: string;
    region: string;
    key: string;
  } | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  documentTemplateId?: string | null;
  owner?: string | null;
};

export type CreateRecordedNoteMutation = {
  __typename: "RecordedNote";
  id: string;
  name: string;
  editors?: Array<string> | null;
  viewers?: Array<string> | null;
  recording?: {
    __typename: "S3Object";
    bucket: string;
    region: string;
    key: string;
  } | null;
  transcription?: string | null;
  comprehension?: string | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  owner?: string | null;
};

export type UpdateRecordedNoteMutation = {
  __typename: "RecordedNote";
  id: string;
  name: string;
  editors?: Array<string> | null;
  viewers?: Array<string> | null;
  recording?: {
    __typename: "S3Object";
    bucket: string;
    region: string;
    key: string;
  } | null;
  transcription?: string | null;
  comprehension?: string | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  owner?: string | null;
};

export type DeleteRecordedNoteMutation = {
  __typename: "RecordedNote";
  id: string;
  name: string;
  editors?: Array<string> | null;
  viewers?: Array<string> | null;
  recording?: {
    __typename: "S3Object";
    bucket: string;
    region: string;
    key: string;
  } | null;
  transcription?: string | null;
  comprehension?: string | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  owner?: string | null;
};

export type GetUserQuery = {
  __typename: "User";
  id: string;
  email: string;
  phone?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  nickName?: string | null;
  avatar?: string | null;
  timezone?: string | null;
  acceptedAgreements?: Array<string> | null;
  stripeId?: string | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  owner?: string | null;
};

export type ListUsersQuery = {
  __typename: "ModelUserConnection";
  items: Array<{
    __typename: "User";
    id: string;
    email: string;
    phone?: string | null;
    firstName?: string | null;
    lastName?: string | null;
    nickName?: string | null;
    avatar?: string | null;
    timezone?: string | null;
    acceptedAgreements?: Array<string> | null;
    stripeId?: string | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    owner?: string | null;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type SyncUsersQuery = {
  __typename: "ModelUserConnection";
  items: Array<{
    __typename: "User";
    id: string;
    email: string;
    phone?: string | null;
    firstName?: string | null;
    lastName?: string | null;
    nickName?: string | null;
    avatar?: string | null;
    timezone?: string | null;
    acceptedAgreements?: Array<string> | null;
    stripeId?: string | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    owner?: string | null;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type GetTemplateQuery = {
  __typename: "Template";
  id: string;
  name: string;
  fileArn?: string | null;
  blocks?: {
    __typename: "ModelTemplateBlockConnection";
    items: Array<{
      __typename: "TemplateBlock";
      id: string;
      name: string;
      tlx: number;
      tly: number;
      trx: number;
      try: number;
      blx: number;
      bly: number;
      brx: number;
      bry: number;
      contentType: ContentType;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      templateBlocksId?: string | null;
      owner?: string | null;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  editors?: Array<string> | null;
  viewers?: Array<string> | null;
  file?: {
    __typename: "S3Object";
    bucket: string;
    region: string;
    key: string;
  } | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  owner?: string | null;
};

export type ListTemplatesQuery = {
  __typename: "ModelTemplateConnection";
  items: Array<{
    __typename: "Template";
    id: string;
    name: string;
    fileArn?: string | null;
    blocks?: {
      __typename: "ModelTemplateBlockConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    editors?: Array<string> | null;
    viewers?: Array<string> | null;
    file?: {
      __typename: "S3Object";
      bucket: string;
      region: string;
      key: string;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    owner?: string | null;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type SyncTemplatesQuery = {
  __typename: "ModelTemplateConnection";
  items: Array<{
    __typename: "Template";
    id: string;
    name: string;
    fileArn?: string | null;
    blocks?: {
      __typename: "ModelTemplateBlockConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    editors?: Array<string> | null;
    viewers?: Array<string> | null;
    file?: {
      __typename: "S3Object";
      bucket: string;
      region: string;
      key: string;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    owner?: string | null;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type GetTemplateBlockQuery = {
  __typename: "TemplateBlock";
  id: string;
  name: string;
  template: {
    __typename: "Template";
    id: string;
    name: string;
    fileArn?: string | null;
    blocks?: {
      __typename: "ModelTemplateBlockConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    editors?: Array<string> | null;
    viewers?: Array<string> | null;
    file?: {
      __typename: "S3Object";
      bucket: string;
      region: string;
      key: string;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    owner?: string | null;
  };
  tlx: number;
  tly: number;
  trx: number;
  try: number;
  blx: number;
  bly: number;
  brx: number;
  bry: number;
  contentType: ContentType;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  templateBlocksId?: string | null;
  owner?: string | null;
};

export type ListTemplateBlocksQuery = {
  __typename: "ModelTemplateBlockConnection";
  items: Array<{
    __typename: "TemplateBlock";
    id: string;
    name: string;
    template: {
      __typename: "Template";
      id: string;
      name: string;
      fileArn?: string | null;
      editors?: Array<string> | null;
      viewers?: Array<string> | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      owner?: string | null;
    };
    tlx: number;
    tly: number;
    trx: number;
    try: number;
    blx: number;
    bly: number;
    brx: number;
    bry: number;
    contentType: ContentType;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    templateBlocksId?: string | null;
    owner?: string | null;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type SyncTemplateBlocksQuery = {
  __typename: "ModelTemplateBlockConnection";
  items: Array<{
    __typename: "TemplateBlock";
    id: string;
    name: string;
    template: {
      __typename: "Template";
      id: string;
      name: string;
      fileArn?: string | null;
      editors?: Array<string> | null;
      viewers?: Array<string> | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      owner?: string | null;
    };
    tlx: number;
    tly: number;
    trx: number;
    try: number;
    blx: number;
    bly: number;
    brx: number;
    bry: number;
    contentType: ContentType;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    templateBlocksId?: string | null;
    owner?: string | null;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type GetDocumentQuery = {
  __typename: "Document";
  arn: string;
  name: string;
  template?: {
    __typename: "Template";
    id: string;
    name: string;
    fileArn?: string | null;
    blocks?: {
      __typename: "ModelTemplateBlockConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    editors?: Array<string> | null;
    viewers?: Array<string> | null;
    file?: {
      __typename: "S3Object";
      bucket: string;
      region: string;
      key: string;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    owner?: string | null;
  } | null;
  blocks?: {
    __typename: "ModelDocumentBlockConnection";
    items: Array<{
      __typename: "DocumentBlock";
      id: string;
      name: string;
      tlx?: number | null;
      tly?: number | null;
      trx?: number | null;
      try?: number | null;
      blx?: number | null;
      bly?: number | null;
      brx?: number | null;
      bry?: number | null;
      contentType: ContentType;
      originalContent?: string | null;
      parsedContent?: string | null;
      correctedContent?: string | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      documentBlocksArn?: string | null;
      documentBlockTemplateId?: string | null;
      documentBlockTemplateBlockId?: string | null;
      owner?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  editors?: Array<string> | null;
  viewers?: Array<string> | null;
  file?: {
    __typename: "S3Object";
    bucket: string;
    region: string;
    key: string;
  } | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  documentTemplateId?: string | null;
  owner?: string | null;
};

export type ListDocumentsQuery = {
  __typename: "ModelDocumentConnection";
  items: Array<{
    __typename: "Document";
    arn: string;
    name: string;
    template?: {
      __typename: "Template";
      id: string;
      name: string;
      fileArn?: string | null;
      editors?: Array<string> | null;
      viewers?: Array<string> | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      owner?: string | null;
    } | null;
    blocks?: {
      __typename: "ModelDocumentBlockConnection";
      nextToken?: string | null;
    } | null;
    editors?: Array<string> | null;
    viewers?: Array<string> | null;
    file?: {
      __typename: "S3Object";
      bucket: string;
      region: string;
      key: string;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    documentTemplateId?: string | null;
    owner?: string | null;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type SyncDocumentsQuery = {
  __typename: "ModelDocumentConnection";
  items: Array<{
    __typename: "Document";
    arn: string;
    name: string;
    template?: {
      __typename: "Template";
      id: string;
      name: string;
      fileArn?: string | null;
      editors?: Array<string> | null;
      viewers?: Array<string> | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      owner?: string | null;
    } | null;
    blocks?: {
      __typename: "ModelDocumentBlockConnection";
      nextToken?: string | null;
    } | null;
    editors?: Array<string> | null;
    viewers?: Array<string> | null;
    file?: {
      __typename: "S3Object";
      bucket: string;
      region: string;
      key: string;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    documentTemplateId?: string | null;
    owner?: string | null;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type GetRecordedNoteQuery = {
  __typename: "RecordedNote";
  id: string;
  name: string;
  editors?: Array<string> | null;
  viewers?: Array<string> | null;
  recording?: {
    __typename: "S3Object";
    bucket: string;
    region: string;
    key: string;
  } | null;
  transcription?: string | null;
  comprehension?: string | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  owner?: string | null;
};

export type ListRecordedNotesQuery = {
  __typename: "ModelRecordedNoteConnection";
  items: Array<{
    __typename: "RecordedNote";
    id: string;
    name: string;
    editors?: Array<string> | null;
    viewers?: Array<string> | null;
    recording?: {
      __typename: "S3Object";
      bucket: string;
      region: string;
      key: string;
    } | null;
    transcription?: string | null;
    comprehension?: string | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    owner?: string | null;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type SyncRecordedNotesQuery = {
  __typename: "ModelRecordedNoteConnection";
  items: Array<{
    __typename: "RecordedNote";
    id: string;
    name: string;
    editors?: Array<string> | null;
    viewers?: Array<string> | null;
    recording?: {
      __typename: "S3Object";
      bucket: string;
      region: string;
      key: string;
    } | null;
    transcription?: string | null;
    comprehension?: string | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    owner?: string | null;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type GetUserActivityQuery = {
  __typename: "UserActivity";
  id: string;
  userID: string;
  activity: string;
  tags?: Array<string | null> | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  documentBlockCorrectionsId?: string | null;
  owner?: string | null;
};

export type ListUserActivitiesQuery = {
  __typename: "ModelUserActivityConnection";
  items: Array<{
    __typename: "UserActivity";
    id: string;
    userID: string;
    activity: string;
    tags?: Array<string | null> | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    documentBlockCorrectionsId?: string | null;
    owner?: string | null;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type SyncUserActivitiesQuery = {
  __typename: "ModelUserActivityConnection";
  items: Array<{
    __typename: "UserActivity";
    id: string;
    userID: string;
    activity: string;
    tags?: Array<string | null> | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    documentBlockCorrectionsId?: string | null;
    owner?: string | null;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type OnCreateUserSubscription = {
  __typename: "User";
  id: string;
  email: string;
  phone?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  nickName?: string | null;
  avatar?: string | null;
  timezone?: string | null;
  acceptedAgreements?: Array<string> | null;
  stripeId?: string | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  owner?: string | null;
};

export type OnUpdateUserSubscription = {
  __typename: "User";
  id: string;
  email: string;
  phone?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  nickName?: string | null;
  avatar?: string | null;
  timezone?: string | null;
  acceptedAgreements?: Array<string> | null;
  stripeId?: string | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  owner?: string | null;
};

export type OnDeleteUserSubscription = {
  __typename: "User";
  id: string;
  email: string;
  phone?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  nickName?: string | null;
  avatar?: string | null;
  timezone?: string | null;
  acceptedAgreements?: Array<string> | null;
  stripeId?: string | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  owner?: string | null;
};

export type OnCreateTemplateSubscription = {
  __typename: "Template";
  id: string;
  name: string;
  fileArn?: string | null;
  blocks?: {
    __typename: "ModelTemplateBlockConnection";
    items: Array<{
      __typename: "TemplateBlock";
      id: string;
      name: string;
      tlx: number;
      tly: number;
      trx: number;
      try: number;
      blx: number;
      bly: number;
      brx: number;
      bry: number;
      contentType: ContentType;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      templateBlocksId?: string | null;
      owner?: string | null;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  editors?: Array<string> | null;
  viewers?: Array<string> | null;
  file?: {
    __typename: "S3Object";
    bucket: string;
    region: string;
    key: string;
  } | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  owner?: string | null;
};

export type OnUpdateTemplateSubscription = {
  __typename: "Template";
  id: string;
  name: string;
  fileArn?: string | null;
  blocks?: {
    __typename: "ModelTemplateBlockConnection";
    items: Array<{
      __typename: "TemplateBlock";
      id: string;
      name: string;
      tlx: number;
      tly: number;
      trx: number;
      try: number;
      blx: number;
      bly: number;
      brx: number;
      bry: number;
      contentType: ContentType;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      templateBlocksId?: string | null;
      owner?: string | null;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  editors?: Array<string> | null;
  viewers?: Array<string> | null;
  file?: {
    __typename: "S3Object";
    bucket: string;
    region: string;
    key: string;
  } | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  owner?: string | null;
};

export type OnDeleteTemplateSubscription = {
  __typename: "Template";
  id: string;
  name: string;
  fileArn?: string | null;
  blocks?: {
    __typename: "ModelTemplateBlockConnection";
    items: Array<{
      __typename: "TemplateBlock";
      id: string;
      name: string;
      tlx: number;
      tly: number;
      trx: number;
      try: number;
      blx: number;
      bly: number;
      brx: number;
      bry: number;
      contentType: ContentType;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      templateBlocksId?: string | null;
      owner?: string | null;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  editors?: Array<string> | null;
  viewers?: Array<string> | null;
  file?: {
    __typename: "S3Object";
    bucket: string;
    region: string;
    key: string;
  } | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  owner?: string | null;
};

export type OnCreateTemplateBlockSubscription = {
  __typename: "TemplateBlock";
  id: string;
  name: string;
  template: {
    __typename: "Template";
    id: string;
    name: string;
    fileArn?: string | null;
    blocks?: {
      __typename: "ModelTemplateBlockConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    editors?: Array<string> | null;
    viewers?: Array<string> | null;
    file?: {
      __typename: "S3Object";
      bucket: string;
      region: string;
      key: string;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    owner?: string | null;
  };
  tlx: number;
  tly: number;
  trx: number;
  try: number;
  blx: number;
  bly: number;
  brx: number;
  bry: number;
  contentType: ContentType;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  templateBlocksId?: string | null;
  owner?: string | null;
};

export type OnUpdateTemplateBlockSubscription = {
  __typename: "TemplateBlock";
  id: string;
  name: string;
  template: {
    __typename: "Template";
    id: string;
    name: string;
    fileArn?: string | null;
    blocks?: {
      __typename: "ModelTemplateBlockConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    editors?: Array<string> | null;
    viewers?: Array<string> | null;
    file?: {
      __typename: "S3Object";
      bucket: string;
      region: string;
      key: string;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    owner?: string | null;
  };
  tlx: number;
  tly: number;
  trx: number;
  try: number;
  blx: number;
  bly: number;
  brx: number;
  bry: number;
  contentType: ContentType;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  templateBlocksId?: string | null;
  owner?: string | null;
};

export type OnDeleteTemplateBlockSubscription = {
  __typename: "TemplateBlock";
  id: string;
  name: string;
  template: {
    __typename: "Template";
    id: string;
    name: string;
    fileArn?: string | null;
    blocks?: {
      __typename: "ModelTemplateBlockConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    editors?: Array<string> | null;
    viewers?: Array<string> | null;
    file?: {
      __typename: "S3Object";
      bucket: string;
      region: string;
      key: string;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    owner?: string | null;
  };
  tlx: number;
  tly: number;
  trx: number;
  try: number;
  blx: number;
  bly: number;
  brx: number;
  bry: number;
  contentType: ContentType;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  templateBlocksId?: string | null;
  owner?: string | null;
};

export type OnCreateDocumentSubscription = {
  __typename: "Document";
  arn: string;
  name: string;
  template?: {
    __typename: "Template";
    id: string;
    name: string;
    fileArn?: string | null;
    blocks?: {
      __typename: "ModelTemplateBlockConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    editors?: Array<string> | null;
    viewers?: Array<string> | null;
    file?: {
      __typename: "S3Object";
      bucket: string;
      region: string;
      key: string;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    owner?: string | null;
  } | null;
  blocks?: {
    __typename: "ModelDocumentBlockConnection";
    items: Array<{
      __typename: "DocumentBlock";
      id: string;
      name: string;
      tlx?: number | null;
      tly?: number | null;
      trx?: number | null;
      try?: number | null;
      blx?: number | null;
      bly?: number | null;
      brx?: number | null;
      bry?: number | null;
      contentType: ContentType;
      originalContent?: string | null;
      parsedContent?: string | null;
      correctedContent?: string | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      documentBlocksArn?: string | null;
      documentBlockTemplateId?: string | null;
      documentBlockTemplateBlockId?: string | null;
      owner?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  editors?: Array<string> | null;
  viewers?: Array<string> | null;
  file?: {
    __typename: "S3Object";
    bucket: string;
    region: string;
    key: string;
  } | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  documentTemplateId?: string | null;
  owner?: string | null;
};

export type OnUpdateDocumentSubscription = {
  __typename: "Document";
  arn: string;
  name: string;
  template?: {
    __typename: "Template";
    id: string;
    name: string;
    fileArn?: string | null;
    blocks?: {
      __typename: "ModelTemplateBlockConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    editors?: Array<string> | null;
    viewers?: Array<string> | null;
    file?: {
      __typename: "S3Object";
      bucket: string;
      region: string;
      key: string;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    owner?: string | null;
  } | null;
  blocks?: {
    __typename: "ModelDocumentBlockConnection";
    items: Array<{
      __typename: "DocumentBlock";
      id: string;
      name: string;
      tlx?: number | null;
      tly?: number | null;
      trx?: number | null;
      try?: number | null;
      blx?: number | null;
      bly?: number | null;
      brx?: number | null;
      bry?: number | null;
      contentType: ContentType;
      originalContent?: string | null;
      parsedContent?: string | null;
      correctedContent?: string | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      documentBlocksArn?: string | null;
      documentBlockTemplateId?: string | null;
      documentBlockTemplateBlockId?: string | null;
      owner?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  editors?: Array<string> | null;
  viewers?: Array<string> | null;
  file?: {
    __typename: "S3Object";
    bucket: string;
    region: string;
    key: string;
  } | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  documentTemplateId?: string | null;
  owner?: string | null;
};

export type OnDeleteDocumentSubscription = {
  __typename: "Document";
  arn: string;
  name: string;
  template?: {
    __typename: "Template";
    id: string;
    name: string;
    fileArn?: string | null;
    blocks?: {
      __typename: "ModelTemplateBlockConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    editors?: Array<string> | null;
    viewers?: Array<string> | null;
    file?: {
      __typename: "S3Object";
      bucket: string;
      region: string;
      key: string;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    owner?: string | null;
  } | null;
  blocks?: {
    __typename: "ModelDocumentBlockConnection";
    items: Array<{
      __typename: "DocumentBlock";
      id: string;
      name: string;
      tlx?: number | null;
      tly?: number | null;
      trx?: number | null;
      try?: number | null;
      blx?: number | null;
      bly?: number | null;
      brx?: number | null;
      bry?: number | null;
      contentType: ContentType;
      originalContent?: string | null;
      parsedContent?: string | null;
      correctedContent?: string | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      documentBlocksArn?: string | null;
      documentBlockTemplateId?: string | null;
      documentBlockTemplateBlockId?: string | null;
      owner?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  editors?: Array<string> | null;
  viewers?: Array<string> | null;
  file?: {
    __typename: "S3Object";
    bucket: string;
    region: string;
    key: string;
  } | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  documentTemplateId?: string | null;
  owner?: string | null;
};

export type OnCreateRecordedNoteSubscription = {
  __typename: "RecordedNote";
  id: string;
  name: string;
  editors?: Array<string> | null;
  viewers?: Array<string> | null;
  recording?: {
    __typename: "S3Object";
    bucket: string;
    region: string;
    key: string;
  } | null;
  transcription?: string | null;
  comprehension?: string | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  owner?: string | null;
};

export type OnUpdateRecordedNoteSubscription = {
  __typename: "RecordedNote";
  id: string;
  name: string;
  editors?: Array<string> | null;
  viewers?: Array<string> | null;
  recording?: {
    __typename: "S3Object";
    bucket: string;
    region: string;
    key: string;
  } | null;
  transcription?: string | null;
  comprehension?: string | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  owner?: string | null;
};

export type OnDeleteRecordedNoteSubscription = {
  __typename: "RecordedNote";
  id: string;
  name: string;
  editors?: Array<string> | null;
  viewers?: Array<string> | null;
  recording?: {
    __typename: "S3Object";
    bucket: string;
    region: string;
    key: string;
  } | null;
  transcription?: string | null;
  comprehension?: string | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  owner?: string | null;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateUser(
    input: CreateUserInput,
    condition?: ModelUserConditionInput
  ): Promise<CreateUserMutation> {
    const statement = `mutation CreateUser($input: CreateUserInput!, $condition: ModelUserConditionInput) {
        createUser(input: $input, condition: $condition) {
          __typename
          id
          email
          phone
          firstName
          lastName
          nickName
          avatar
          timezone
          acceptedAgreements
          stripeId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateUserMutation>response.data.createUser;
  }
  async UpdateUser(
    input: UpdateUserInput,
    condition?: ModelUserConditionInput
  ): Promise<UpdateUserMutation> {
    const statement = `mutation UpdateUser($input: UpdateUserInput!, $condition: ModelUserConditionInput) {
        updateUser(input: $input, condition: $condition) {
          __typename
          id
          email
          phone
          firstName
          lastName
          nickName
          avatar
          timezone
          acceptedAgreements
          stripeId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateUserMutation>response.data.updateUser;
  }
  async DeleteUser(
    input: DeleteUserInput,
    condition?: ModelUserConditionInput
  ): Promise<DeleteUserMutation> {
    const statement = `mutation DeleteUser($input: DeleteUserInput!, $condition: ModelUserConditionInput) {
        deleteUser(input: $input, condition: $condition) {
          __typename
          id
          email
          phone
          firstName
          lastName
          nickName
          avatar
          timezone
          acceptedAgreements
          stripeId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteUserMutation>response.data.deleteUser;
  }
  async CreateTemplate(
    input: CreateTemplateInput,
    condition?: ModelTemplateConditionInput
  ): Promise<CreateTemplateMutation> {
    const statement = `mutation CreateTemplate($input: CreateTemplateInput!, $condition: ModelTemplateConditionInput) {
        createTemplate(input: $input, condition: $condition) {
          __typename
          id
          name
          fileArn
          blocks {
            __typename
            items {
              __typename
              id
              name
              tlx
              tly
              trx
              try
              blx
              bly
              brx
              bry
              contentType
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              templateBlocksId
              owner
            }
            nextToken
            startedAt
          }
          editors
          viewers
          file {
            __typename
            bucket
            region
            key
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateTemplateMutation>response.data.createTemplate;
  }
  async UpdateTemplate(
    input: UpdateTemplateInput,
    condition?: ModelTemplateConditionInput
  ): Promise<UpdateTemplateMutation> {
    const statement = `mutation UpdateTemplate($input: UpdateTemplateInput!, $condition: ModelTemplateConditionInput) {
        updateTemplate(input: $input, condition: $condition) {
          __typename
          id
          name
          fileArn
          blocks {
            __typename
            items {
              __typename
              id
              name
              tlx
              tly
              trx
              try
              blx
              bly
              brx
              bry
              contentType
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              templateBlocksId
              owner
            }
            nextToken
            startedAt
          }
          editors
          viewers
          file {
            __typename
            bucket
            region
            key
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateTemplateMutation>response.data.updateTemplate;
  }
  async DeleteTemplate(
    input: DeleteTemplateInput,
    condition?: ModelTemplateConditionInput
  ): Promise<DeleteTemplateMutation> {
    const statement = `mutation DeleteTemplate($input: DeleteTemplateInput!, $condition: ModelTemplateConditionInput) {
        deleteTemplate(input: $input, condition: $condition) {
          __typename
          id
          name
          fileArn
          blocks {
            __typename
            items {
              __typename
              id
              name
              tlx
              tly
              trx
              try
              blx
              bly
              brx
              bry
              contentType
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              templateBlocksId
              owner
            }
            nextToken
            startedAt
          }
          editors
          viewers
          file {
            __typename
            bucket
            region
            key
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteTemplateMutation>response.data.deleteTemplate;
  }
  async CreateTemplateBlock(
    input: CreateTemplateBlockInput,
    condition?: ModelTemplateBlockConditionInput
  ): Promise<CreateTemplateBlockMutation> {
    const statement = `mutation CreateTemplateBlock($input: CreateTemplateBlockInput!, $condition: ModelTemplateBlockConditionInput) {
        createTemplateBlock(input: $input, condition: $condition) {
          __typename
          id
          name
          template {
            __typename
            id
            name
            fileArn
            blocks {
              __typename
              nextToken
              startedAt
            }
            editors
            viewers
            file {
              __typename
              bucket
              region
              key
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
          }
          tlx
          tly
          trx
          try
          blx
          bly
          brx
          bry
          contentType
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          templateBlocksId
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateTemplateBlockMutation>response.data.createTemplateBlock;
  }
  async UpdateTemplateBlock(
    input: UpdateTemplateBlockInput,
    condition?: ModelTemplateBlockConditionInput
  ): Promise<UpdateTemplateBlockMutation> {
    const statement = `mutation UpdateTemplateBlock($input: UpdateTemplateBlockInput!, $condition: ModelTemplateBlockConditionInput) {
        updateTemplateBlock(input: $input, condition: $condition) {
          __typename
          id
          name
          template {
            __typename
            id
            name
            fileArn
            blocks {
              __typename
              nextToken
              startedAt
            }
            editors
            viewers
            file {
              __typename
              bucket
              region
              key
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
          }
          tlx
          tly
          trx
          try
          blx
          bly
          brx
          bry
          contentType
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          templateBlocksId
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateTemplateBlockMutation>response.data.updateTemplateBlock;
  }
  async DeleteTemplateBlock(
    input: DeleteTemplateBlockInput,
    condition?: ModelTemplateBlockConditionInput
  ): Promise<DeleteTemplateBlockMutation> {
    const statement = `mutation DeleteTemplateBlock($input: DeleteTemplateBlockInput!, $condition: ModelTemplateBlockConditionInput) {
        deleteTemplateBlock(input: $input, condition: $condition) {
          __typename
          id
          name
          template {
            __typename
            id
            name
            fileArn
            blocks {
              __typename
              nextToken
              startedAt
            }
            editors
            viewers
            file {
              __typename
              bucket
              region
              key
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
          }
          tlx
          tly
          trx
          try
          blx
          bly
          brx
          bry
          contentType
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          templateBlocksId
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteTemplateBlockMutation>response.data.deleteTemplateBlock;
  }
  async CreateDocument(
    input: CreateDocumentInput,
    condition?: ModelDocumentConditionInput
  ): Promise<CreateDocumentMutation> {
    const statement = `mutation CreateDocument($input: CreateDocumentInput!, $condition: ModelDocumentConditionInput) {
        createDocument(input: $input, condition: $condition) {
          __typename
          arn
          name
          template {
            __typename
            id
            name
            fileArn
            blocks {
              __typename
              nextToken
              startedAt
            }
            editors
            viewers
            file {
              __typename
              bucket
              region
              key
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
          }
          blocks {
            __typename
            items {
              __typename
              id
              name
              tlx
              tly
              trx
              try
              blx
              bly
              brx
              bry
              contentType
              originalContent
              parsedContent
              correctedContent
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              documentBlocksArn
              documentBlockTemplateId
              documentBlockTemplateBlockId
              owner
            }
            nextToken
          }
          editors
          viewers
          file {
            __typename
            bucket
            region
            key
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          documentTemplateId
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateDocumentMutation>response.data.createDocument;
  }
  async UpdateDocument(
    input: UpdateDocumentInput,
    condition?: ModelDocumentConditionInput
  ): Promise<UpdateDocumentMutation> {
    const statement = `mutation UpdateDocument($input: UpdateDocumentInput!, $condition: ModelDocumentConditionInput) {
        updateDocument(input: $input, condition: $condition) {
          __typename
          arn
          name
          template {
            __typename
            id
            name
            fileArn
            blocks {
              __typename
              nextToken
              startedAt
            }
            editors
            viewers
            file {
              __typename
              bucket
              region
              key
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
          }
          blocks {
            __typename
            items {
              __typename
              id
              name
              tlx
              tly
              trx
              try
              blx
              bly
              brx
              bry
              contentType
              originalContent
              parsedContent
              correctedContent
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              documentBlocksArn
              documentBlockTemplateId
              documentBlockTemplateBlockId
              owner
            }
            nextToken
          }
          editors
          viewers
          file {
            __typename
            bucket
            region
            key
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          documentTemplateId
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateDocumentMutation>response.data.updateDocument;
  }
  async DeleteDocument(
    input: DeleteDocumentInput,
    condition?: ModelDocumentConditionInput
  ): Promise<DeleteDocumentMutation> {
    const statement = `mutation DeleteDocument($input: DeleteDocumentInput!, $condition: ModelDocumentConditionInput) {
        deleteDocument(input: $input, condition: $condition) {
          __typename
          arn
          name
          template {
            __typename
            id
            name
            fileArn
            blocks {
              __typename
              nextToken
              startedAt
            }
            editors
            viewers
            file {
              __typename
              bucket
              region
              key
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
          }
          blocks {
            __typename
            items {
              __typename
              id
              name
              tlx
              tly
              trx
              try
              blx
              bly
              brx
              bry
              contentType
              originalContent
              parsedContent
              correctedContent
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              documentBlocksArn
              documentBlockTemplateId
              documentBlockTemplateBlockId
              owner
            }
            nextToken
          }
          editors
          viewers
          file {
            __typename
            bucket
            region
            key
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          documentTemplateId
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteDocumentMutation>response.data.deleteDocument;
  }
  async CreateRecordedNote(
    input: CreateRecordedNoteInput,
    condition?: ModelRecordedNoteConditionInput
  ): Promise<CreateRecordedNoteMutation> {
    const statement = `mutation CreateRecordedNote($input: CreateRecordedNoteInput!, $condition: ModelRecordedNoteConditionInput) {
        createRecordedNote(input: $input, condition: $condition) {
          __typename
          id
          name
          editors
          viewers
          recording {
            __typename
            bucket
            region
            key
          }
          transcription
          comprehension
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateRecordedNoteMutation>response.data.createRecordedNote;
  }
  async UpdateRecordedNote(
    input: UpdateRecordedNoteInput,
    condition?: ModelRecordedNoteConditionInput
  ): Promise<UpdateRecordedNoteMutation> {
    const statement = `mutation UpdateRecordedNote($input: UpdateRecordedNoteInput!, $condition: ModelRecordedNoteConditionInput) {
        updateRecordedNote(input: $input, condition: $condition) {
          __typename
          id
          name
          editors
          viewers
          recording {
            __typename
            bucket
            region
            key
          }
          transcription
          comprehension
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateRecordedNoteMutation>response.data.updateRecordedNote;
  }
  async DeleteRecordedNote(
    input: DeleteRecordedNoteInput,
    condition?: ModelRecordedNoteConditionInput
  ): Promise<DeleteRecordedNoteMutation> {
    const statement = `mutation DeleteRecordedNote($input: DeleteRecordedNoteInput!, $condition: ModelRecordedNoteConditionInput) {
        deleteRecordedNote(input: $input, condition: $condition) {
          __typename
          id
          name
          editors
          viewers
          recording {
            __typename
            bucket
            region
            key
          }
          transcription
          comprehension
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteRecordedNoteMutation>response.data.deleteRecordedNote;
  }
  async TranscribeToMedicalSOAPNotes(
    bucket: string,
    region: string,
    key: string,
    cfg: string
  ): Promise<string | null> {
    const statement = `query TranscribeToMedicalSOAPNotes($bucket: String!, $region: String!, $key: String!, $cfg: AWSJSON!) {
        transcribeToMedicalSOAPNotes(bucket: $bucket, region: $region, key: $key, cfg: $cfg)
      }`;
    const gqlAPIServiceArguments: any = {
      bucket,
      region,
      key,
      cfg
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <string | null>response.data.transcribeToMedicalSOAPNotes;
  }
  async GenerateMedicalSOAPSummary(
    text: string,
    cfg: string
  ): Promise<string | null> {
    const statement = `query GenerateMedicalSOAPSummary($text: String!, $cfg: AWSJSON!) {
        generateMedicalSOAPSummary(text: $text, cfg: $cfg)
      }`;
    const gqlAPIServiceArguments: any = {
      text,
      cfg
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <string | null>response.data.generateMedicalSOAPSummary;
  }
  async InterpretMedicalText(
    text: string,
    operation: MedicalComprehensionType
  ): Promise<string | null> {
    const statement = `query InterpretMedicalText($text: String!, $operation: MedicalComprehensionType!) {
        interpretMedicalText(text: $text, operation: $operation)
      }`;
    const gqlAPIServiceArguments: any = {
      text,
      operation
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <string | null>response.data.interpretMedicalText;
  }
  async GetUser(id: string): Promise<GetUserQuery> {
    const statement = `query GetUser($id: ID!) {
        getUser(id: $id) {
          __typename
          id
          email
          phone
          firstName
          lastName
          nickName
          avatar
          timezone
          acceptedAgreements
          stripeId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetUserQuery>response.data.getUser;
  }
  async ListUsers(
    filter?: ModelUserFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListUsersQuery> {
    const statement = `query ListUsers($filter: ModelUserFilterInput, $limit: Int, $nextToken: String) {
        listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            email
            phone
            firstName
            lastName
            nickName
            avatar
            timezone
            acceptedAgreements
            stripeId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListUsersQuery>response.data.listUsers;
  }
  async SyncUsers(
    filter?: ModelUserFilterInput,
    limit?: number,
    nextToken?: string,
    lastSync?: number
  ): Promise<SyncUsersQuery> {
    const statement = `query SyncUsers($filter: ModelUserFilterInput, $limit: Int, $nextToken: String, $lastSync: AWSTimestamp) {
        syncUsers(filter: $filter, limit: $limit, nextToken: $nextToken, lastSync: $lastSync) {
          __typename
          items {
            __typename
            id
            email
            phone
            firstName
            lastName
            nickName
            avatar
            timezone
            acceptedAgreements
            stripeId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (lastSync) {
      gqlAPIServiceArguments.lastSync = lastSync;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <SyncUsersQuery>response.data.syncUsers;
  }
  async GetTemplate(id: string): Promise<GetTemplateQuery> {
    const statement = `query GetTemplate($id: ID!) {
        getTemplate(id: $id) {
          __typename
          id
          name
          fileArn
          blocks {
            __typename
            items {
              __typename
              id
              name
              tlx
              tly
              trx
              try
              blx
              bly
              brx
              bry
              contentType
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              templateBlocksId
              owner
            }
            nextToken
            startedAt
          }
          editors
          viewers
          file {
            __typename
            bucket
            region
            key
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetTemplateQuery>response.data.getTemplate;
  }
  async ListTemplates(
    filter?: ModelTemplateFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListTemplatesQuery> {
    const statement = `query ListTemplates($filter: ModelTemplateFilterInput, $limit: Int, $nextToken: String) {
        listTemplates(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            fileArn
            blocks {
              __typename
              nextToken
              startedAt
            }
            editors
            viewers
            file {
              __typename
              bucket
              region
              key
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListTemplatesQuery>response.data.listTemplates;
  }
  async SyncTemplates(
    filter?: ModelTemplateFilterInput,
    limit?: number,
    nextToken?: string,
    lastSync?: number
  ): Promise<SyncTemplatesQuery> {
    const statement = `query SyncTemplates($filter: ModelTemplateFilterInput, $limit: Int, $nextToken: String, $lastSync: AWSTimestamp) {
        syncTemplates(filter: $filter, limit: $limit, nextToken: $nextToken, lastSync: $lastSync) {
          __typename
          items {
            __typename
            id
            name
            fileArn
            blocks {
              __typename
              nextToken
              startedAt
            }
            editors
            viewers
            file {
              __typename
              bucket
              region
              key
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (lastSync) {
      gqlAPIServiceArguments.lastSync = lastSync;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <SyncTemplatesQuery>response.data.syncTemplates;
  }
  async GetTemplateBlock(id: string): Promise<GetTemplateBlockQuery> {
    const statement = `query GetTemplateBlock($id: ID!) {
        getTemplateBlock(id: $id) {
          __typename
          id
          name
          template {
            __typename
            id
            name
            fileArn
            blocks {
              __typename
              nextToken
              startedAt
            }
            editors
            viewers
            file {
              __typename
              bucket
              region
              key
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
          }
          tlx
          tly
          trx
          try
          blx
          bly
          brx
          bry
          contentType
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          templateBlocksId
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetTemplateBlockQuery>response.data.getTemplateBlock;
  }
  async ListTemplateBlocks(
    filter?: ModelTemplateBlockFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListTemplateBlocksQuery> {
    const statement = `query ListTemplateBlocks($filter: ModelTemplateBlockFilterInput, $limit: Int, $nextToken: String) {
        listTemplateBlocks(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            template {
              __typename
              id
              name
              fileArn
              editors
              viewers
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            tlx
            tly
            trx
            try
            blx
            bly
            brx
            bry
            contentType
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            templateBlocksId
            owner
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListTemplateBlocksQuery>response.data.listTemplateBlocks;
  }
  async SyncTemplateBlocks(
    filter?: ModelTemplateBlockFilterInput,
    limit?: number,
    nextToken?: string,
    lastSync?: number
  ): Promise<SyncTemplateBlocksQuery> {
    const statement = `query SyncTemplateBlocks($filter: ModelTemplateBlockFilterInput, $limit: Int, $nextToken: String, $lastSync: AWSTimestamp) {
        syncTemplateBlocks(filter: $filter, limit: $limit, nextToken: $nextToken, lastSync: $lastSync) {
          __typename
          items {
            __typename
            id
            name
            template {
              __typename
              id
              name
              fileArn
              editors
              viewers
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            tlx
            tly
            trx
            try
            blx
            bly
            brx
            bry
            contentType
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            templateBlocksId
            owner
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (lastSync) {
      gqlAPIServiceArguments.lastSync = lastSync;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <SyncTemplateBlocksQuery>response.data.syncTemplateBlocks;
  }
  async GetDocument(arn: string): Promise<GetDocumentQuery> {
    const statement = `query GetDocument($arn: String!) {
        getDocument(arn: $arn) {
          __typename
          arn
          name
          template {
            __typename
            id
            name
            fileArn
            blocks {
              __typename
              nextToken
              startedAt
            }
            editors
            viewers
            file {
              __typename
              bucket
              region
              key
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
          }
          blocks {
            __typename
            items {
              __typename
              id
              name
              tlx
              tly
              trx
              try
              blx
              bly
              brx
              bry
              contentType
              originalContent
              parsedContent
              correctedContent
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              documentBlocksArn
              documentBlockTemplateId
              documentBlockTemplateBlockId
              owner
            }
            nextToken
          }
          editors
          viewers
          file {
            __typename
            bucket
            region
            key
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          documentTemplateId
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      arn
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetDocumentQuery>response.data.getDocument;
  }
  async ListDocuments(
    arn?: string,
    filter?: ModelDocumentFilterInput,
    limit?: number,
    nextToken?: string,
    sortDirection?: ModelSortDirection
  ): Promise<ListDocumentsQuery> {
    const statement = `query ListDocuments($arn: String, $filter: ModelDocumentFilterInput, $limit: Int, $nextToken: String, $sortDirection: ModelSortDirection) {
        listDocuments(arn: $arn, filter: $filter, limit: $limit, nextToken: $nextToken, sortDirection: $sortDirection) {
          __typename
          items {
            __typename
            arn
            name
            template {
              __typename
              id
              name
              fileArn
              editors
              viewers
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            blocks {
              __typename
              nextToken
            }
            editors
            viewers
            file {
              __typename
              bucket
              region
              key
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            documentTemplateId
            owner
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (arn) {
      gqlAPIServiceArguments.arn = arn;
    }
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (sortDirection) {
      gqlAPIServiceArguments.sortDirection = sortDirection;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListDocumentsQuery>response.data.listDocuments;
  }
  async SyncDocuments(
    filter?: ModelDocumentFilterInput,
    limit?: number,
    nextToken?: string,
    lastSync?: number
  ): Promise<SyncDocumentsQuery> {
    const statement = `query SyncDocuments($filter: ModelDocumentFilterInput, $limit: Int, $nextToken: String, $lastSync: AWSTimestamp) {
        syncDocuments(filter: $filter, limit: $limit, nextToken: $nextToken, lastSync: $lastSync) {
          __typename
          items {
            __typename
            arn
            name
            template {
              __typename
              id
              name
              fileArn
              editors
              viewers
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            blocks {
              __typename
              nextToken
            }
            editors
            viewers
            file {
              __typename
              bucket
              region
              key
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            documentTemplateId
            owner
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (lastSync) {
      gqlAPIServiceArguments.lastSync = lastSync;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <SyncDocumentsQuery>response.data.syncDocuments;
  }
  async GetRecordedNote(id: string): Promise<GetRecordedNoteQuery> {
    const statement = `query GetRecordedNote($id: ID!) {
        getRecordedNote(id: $id) {
          __typename
          id
          name
          editors
          viewers
          recording {
            __typename
            bucket
            region
            key
          }
          transcription
          comprehension
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetRecordedNoteQuery>response.data.getRecordedNote;
  }
  async ListRecordedNotes(
    filter?: ModelRecordedNoteFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListRecordedNotesQuery> {
    const statement = `query ListRecordedNotes($filter: ModelRecordedNoteFilterInput, $limit: Int, $nextToken: String) {
        listRecordedNotes(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            editors
            viewers
            recording {
              __typename
              bucket
              region
              key
            }
            transcription
            comprehension
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListRecordedNotesQuery>response.data.listRecordedNotes;
  }
  async SyncRecordedNotes(
    filter?: ModelRecordedNoteFilterInput,
    limit?: number,
    nextToken?: string,
    lastSync?: number
  ): Promise<SyncRecordedNotesQuery> {
    const statement = `query SyncRecordedNotes($filter: ModelRecordedNoteFilterInput, $limit: Int, $nextToken: String, $lastSync: AWSTimestamp) {
        syncRecordedNotes(filter: $filter, limit: $limit, nextToken: $nextToken, lastSync: $lastSync) {
          __typename
          items {
            __typename
            id
            name
            editors
            viewers
            recording {
              __typename
              bucket
              region
              key
            }
            transcription
            comprehension
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (lastSync) {
      gqlAPIServiceArguments.lastSync = lastSync;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <SyncRecordedNotesQuery>response.data.syncRecordedNotes;
  }
  async GetUserActivity(id: string): Promise<GetUserActivityQuery> {
    const statement = `query GetUserActivity($id: ID!) {
        getUserActivity(id: $id) {
          __typename
          id
          userID
          activity
          tags
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          documentBlockCorrectionsId
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetUserActivityQuery>response.data.getUserActivity;
  }
  async ListUserActivities(
    filter?: ModelUserActivityFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListUserActivitiesQuery> {
    const statement = `query ListUserActivities($filter: ModelUserActivityFilterInput, $limit: Int, $nextToken: String) {
        listUserActivities(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            userID
            activity
            tags
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            documentBlockCorrectionsId
            owner
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListUserActivitiesQuery>response.data.listUserActivities;
  }
  async SyncUserActivities(
    filter?: ModelUserActivityFilterInput,
    limit?: number,
    nextToken?: string,
    lastSync?: number
  ): Promise<SyncUserActivitiesQuery> {
    const statement = `query SyncUserActivities($filter: ModelUserActivityFilterInput, $limit: Int, $nextToken: String, $lastSync: AWSTimestamp) {
        syncUserActivities(filter: $filter, limit: $limit, nextToken: $nextToken, lastSync: $lastSync) {
          __typename
          items {
            __typename
            id
            userID
            activity
            tags
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            documentBlockCorrectionsId
            owner
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (lastSync) {
      gqlAPIServiceArguments.lastSync = lastSync;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <SyncUserActivitiesQuery>response.data.syncUserActivities;
  }
  OnCreateUserListener(
    filter?: ModelSubscriptionUserFilterInput,
    id?: string,
    owner?: string
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateUser">>
  > {
    const statement = `subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput, $id: String, $owner: String) {
        onCreateUser(filter: $filter, id: $id, owner: $owner) {
          __typename
          id
          email
          phone
          firstName
          lastName
          nickName
          avatar
          timezone
          acceptedAgreements
          stripeId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (id) {
      gqlAPIServiceArguments.id = id;
    }
    if (owner) {
      gqlAPIServiceArguments.owner = owner;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateUser">>
    >;
  }

  OnUpdateUserListener(
    filter?: ModelSubscriptionUserFilterInput,
    id?: string,
    owner?: string
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateUser">>
  > {
    const statement = `subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput, $id: String, $owner: String) {
        onUpdateUser(filter: $filter, id: $id, owner: $owner) {
          __typename
          id
          email
          phone
          firstName
          lastName
          nickName
          avatar
          timezone
          acceptedAgreements
          stripeId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (id) {
      gqlAPIServiceArguments.id = id;
    }
    if (owner) {
      gqlAPIServiceArguments.owner = owner;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateUser">>
    >;
  }

  OnDeleteUserListener(
    filter?: ModelSubscriptionUserFilterInput,
    id?: string,
    owner?: string
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteUser">>
  > {
    const statement = `subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput, $id: String, $owner: String) {
        onDeleteUser(filter: $filter, id: $id, owner: $owner) {
          __typename
          id
          email
          phone
          firstName
          lastName
          nickName
          avatar
          timezone
          acceptedAgreements
          stripeId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (id) {
      gqlAPIServiceArguments.id = id;
    }
    if (owner) {
      gqlAPIServiceArguments.owner = owner;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteUser">>
    >;
  }

  OnCreateTemplateListener(
    filter?: ModelSubscriptionTemplateFilterInput,
    owner?: string
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateTemplate">>
  > {
    const statement = `subscription OnCreateTemplate($filter: ModelSubscriptionTemplateFilterInput, $owner: String) {
        onCreateTemplate(filter: $filter, owner: $owner) {
          __typename
          id
          name
          fileArn
          blocks {
            __typename
            items {
              __typename
              id
              name
              tlx
              tly
              trx
              try
              blx
              bly
              brx
              bry
              contentType
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              templateBlocksId
              owner
            }
            nextToken
            startedAt
          }
          editors
          viewers
          file {
            __typename
            bucket
            region
            key
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (owner) {
      gqlAPIServiceArguments.owner = owner;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateTemplate">>
    >;
  }

  OnUpdateTemplateListener(
    filter?: ModelSubscriptionTemplateFilterInput,
    owner?: string
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateTemplate">>
  > {
    const statement = `subscription OnUpdateTemplate($filter: ModelSubscriptionTemplateFilterInput, $owner: String) {
        onUpdateTemplate(filter: $filter, owner: $owner) {
          __typename
          id
          name
          fileArn
          blocks {
            __typename
            items {
              __typename
              id
              name
              tlx
              tly
              trx
              try
              blx
              bly
              brx
              bry
              contentType
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              templateBlocksId
              owner
            }
            nextToken
            startedAt
          }
          editors
          viewers
          file {
            __typename
            bucket
            region
            key
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (owner) {
      gqlAPIServiceArguments.owner = owner;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateTemplate">>
    >;
  }

  OnDeleteTemplateListener(
    filter?: ModelSubscriptionTemplateFilterInput,
    owner?: string
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteTemplate">>
  > {
    const statement = `subscription OnDeleteTemplate($filter: ModelSubscriptionTemplateFilterInput, $owner: String) {
        onDeleteTemplate(filter: $filter, owner: $owner) {
          __typename
          id
          name
          fileArn
          blocks {
            __typename
            items {
              __typename
              id
              name
              tlx
              tly
              trx
              try
              blx
              bly
              brx
              bry
              contentType
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              templateBlocksId
              owner
            }
            nextToken
            startedAt
          }
          editors
          viewers
          file {
            __typename
            bucket
            region
            key
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (owner) {
      gqlAPIServiceArguments.owner = owner;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteTemplate">>
    >;
  }

  OnCreateTemplateBlockListener(
    filter?: ModelSubscriptionTemplateBlockFilterInput,
    owner?: string
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateTemplateBlock">>
  > {
    const statement = `subscription OnCreateTemplateBlock($filter: ModelSubscriptionTemplateBlockFilterInput, $owner: String) {
        onCreateTemplateBlock(filter: $filter, owner: $owner) {
          __typename
          id
          name
          template {
            __typename
            id
            name
            fileArn
            blocks {
              __typename
              nextToken
              startedAt
            }
            editors
            viewers
            file {
              __typename
              bucket
              region
              key
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
          }
          tlx
          tly
          trx
          try
          blx
          bly
          brx
          bry
          contentType
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          templateBlocksId
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (owner) {
      gqlAPIServiceArguments.owner = owner;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<
        Pick<__SubscriptionContainer, "onCreateTemplateBlock">
      >
    >;
  }

  OnUpdateTemplateBlockListener(
    filter?: ModelSubscriptionTemplateBlockFilterInput,
    owner?: string
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateTemplateBlock">>
  > {
    const statement = `subscription OnUpdateTemplateBlock($filter: ModelSubscriptionTemplateBlockFilterInput, $owner: String) {
        onUpdateTemplateBlock(filter: $filter, owner: $owner) {
          __typename
          id
          name
          template {
            __typename
            id
            name
            fileArn
            blocks {
              __typename
              nextToken
              startedAt
            }
            editors
            viewers
            file {
              __typename
              bucket
              region
              key
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
          }
          tlx
          tly
          trx
          try
          blx
          bly
          brx
          bry
          contentType
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          templateBlocksId
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (owner) {
      gqlAPIServiceArguments.owner = owner;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<
        Pick<__SubscriptionContainer, "onUpdateTemplateBlock">
      >
    >;
  }

  OnDeleteTemplateBlockListener(
    filter?: ModelSubscriptionTemplateBlockFilterInput,
    owner?: string
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteTemplateBlock">>
  > {
    const statement = `subscription OnDeleteTemplateBlock($filter: ModelSubscriptionTemplateBlockFilterInput, $owner: String) {
        onDeleteTemplateBlock(filter: $filter, owner: $owner) {
          __typename
          id
          name
          template {
            __typename
            id
            name
            fileArn
            blocks {
              __typename
              nextToken
              startedAt
            }
            editors
            viewers
            file {
              __typename
              bucket
              region
              key
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
          }
          tlx
          tly
          trx
          try
          blx
          bly
          brx
          bry
          contentType
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          templateBlocksId
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (owner) {
      gqlAPIServiceArguments.owner = owner;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<
        Pick<__SubscriptionContainer, "onDeleteTemplateBlock">
      >
    >;
  }

  OnCreateDocumentListener(
    filter?: ModelSubscriptionDocumentFilterInput,
    owner?: string
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateDocument">>
  > {
    const statement = `subscription OnCreateDocument($filter: ModelSubscriptionDocumentFilterInput, $owner: String) {
        onCreateDocument(filter: $filter, owner: $owner) {
          __typename
          arn
          name
          template {
            __typename
            id
            name
            fileArn
            blocks {
              __typename
              nextToken
              startedAt
            }
            editors
            viewers
            file {
              __typename
              bucket
              region
              key
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
          }
          blocks {
            __typename
            items {
              __typename
              id
              name
              tlx
              tly
              trx
              try
              blx
              bly
              brx
              bry
              contentType
              originalContent
              parsedContent
              correctedContent
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              documentBlocksArn
              documentBlockTemplateId
              documentBlockTemplateBlockId
              owner
            }
            nextToken
          }
          editors
          viewers
          file {
            __typename
            bucket
            region
            key
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          documentTemplateId
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (owner) {
      gqlAPIServiceArguments.owner = owner;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateDocument">>
    >;
  }

  OnUpdateDocumentListener(
    filter?: ModelSubscriptionDocumentFilterInput,
    owner?: string
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateDocument">>
  > {
    const statement = `subscription OnUpdateDocument($filter: ModelSubscriptionDocumentFilterInput, $owner: String) {
        onUpdateDocument(filter: $filter, owner: $owner) {
          __typename
          arn
          name
          template {
            __typename
            id
            name
            fileArn
            blocks {
              __typename
              nextToken
              startedAt
            }
            editors
            viewers
            file {
              __typename
              bucket
              region
              key
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
          }
          blocks {
            __typename
            items {
              __typename
              id
              name
              tlx
              tly
              trx
              try
              blx
              bly
              brx
              bry
              contentType
              originalContent
              parsedContent
              correctedContent
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              documentBlocksArn
              documentBlockTemplateId
              documentBlockTemplateBlockId
              owner
            }
            nextToken
          }
          editors
          viewers
          file {
            __typename
            bucket
            region
            key
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          documentTemplateId
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (owner) {
      gqlAPIServiceArguments.owner = owner;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateDocument">>
    >;
  }

  OnDeleteDocumentListener(
    filter?: ModelSubscriptionDocumentFilterInput,
    owner?: string
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteDocument">>
  > {
    const statement = `subscription OnDeleteDocument($filter: ModelSubscriptionDocumentFilterInput, $owner: String) {
        onDeleteDocument(filter: $filter, owner: $owner) {
          __typename
          arn
          name
          template {
            __typename
            id
            name
            fileArn
            blocks {
              __typename
              nextToken
              startedAt
            }
            editors
            viewers
            file {
              __typename
              bucket
              region
              key
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
          }
          blocks {
            __typename
            items {
              __typename
              id
              name
              tlx
              tly
              trx
              try
              blx
              bly
              brx
              bry
              contentType
              originalContent
              parsedContent
              correctedContent
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              documentBlocksArn
              documentBlockTemplateId
              documentBlockTemplateBlockId
              owner
            }
            nextToken
          }
          editors
          viewers
          file {
            __typename
            bucket
            region
            key
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          documentTemplateId
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (owner) {
      gqlAPIServiceArguments.owner = owner;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteDocument">>
    >;
  }

  OnCreateRecordedNoteListener(
    filter?: ModelSubscriptionRecordedNoteFilterInput,
    owner?: string
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateRecordedNote">>
  > {
    const statement = `subscription OnCreateRecordedNote($filter: ModelSubscriptionRecordedNoteFilterInput, $owner: String) {
        onCreateRecordedNote(filter: $filter, owner: $owner) {
          __typename
          id
          name
          editors
          viewers
          recording {
            __typename
            bucket
            region
            key
          }
          transcription
          comprehension
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (owner) {
      gqlAPIServiceArguments.owner = owner;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<
        Pick<__SubscriptionContainer, "onCreateRecordedNote">
      >
    >;
  }

  OnUpdateRecordedNoteListener(
    filter?: ModelSubscriptionRecordedNoteFilterInput,
    owner?: string
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateRecordedNote">>
  > {
    const statement = `subscription OnUpdateRecordedNote($filter: ModelSubscriptionRecordedNoteFilterInput, $owner: String) {
        onUpdateRecordedNote(filter: $filter, owner: $owner) {
          __typename
          id
          name
          editors
          viewers
          recording {
            __typename
            bucket
            region
            key
          }
          transcription
          comprehension
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (owner) {
      gqlAPIServiceArguments.owner = owner;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<
        Pick<__SubscriptionContainer, "onUpdateRecordedNote">
      >
    >;
  }

  OnDeleteRecordedNoteListener(
    filter?: ModelSubscriptionRecordedNoteFilterInput,
    owner?: string
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteRecordedNote">>
  > {
    const statement = `subscription OnDeleteRecordedNote($filter: ModelSubscriptionRecordedNoteFilterInput, $owner: String) {
        onDeleteRecordedNote(filter: $filter, owner: $owner) {
          __typename
          id
          name
          editors
          viewers
          recording {
            __typename
            bucket
            region
            key
          }
          transcription
          comprehension
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (owner) {
      gqlAPIServiceArguments.owner = owner;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<
        Pick<__SubscriptionContainer, "onDeleteRecordedNote">
      >
    >;
  }
}
