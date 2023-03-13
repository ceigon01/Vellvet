import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier, CustomIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";

export enum MedicalComprehensionType {
  DETECT_ENTITIES = "DETECT_ENTITIES",
  INFER_RX_NORM = "INFER_RX_NORM",
  INFER_ICD_10_CM = "INFER_ICD_10_CM",
  INFER_SNOMED_CT = "INFER_SNOMED_CT",
  DETECT_PHI = "DETECT_PHI"
}

export enum ContentType {
  HAND_WRITING = "HAND_WRITING",
  PRINT = "PRINT",
  DRAWING = "DRAWING",
  IMAGE = "IMAGE",
  HIGHLIGHT = "HIGHLIGHT",
  SELECT_ONE = "SELECT_ONE",
  SELECT_MULTIPLE = "SELECT_MULTIPLE"
}

type EagerS3Object = {
  readonly bucket: string;
  readonly region: string;
  readonly key: string;
}

type LazyS3Object = {
  readonly bucket: string;
  readonly region: string;
  readonly key: string;
}

export declare type S3Object = LazyLoading extends LazyLoadingDisabled ? EagerS3Object : LazyS3Object

export declare const S3Object: (new (init: ModelInit<S3Object>) => S3Object)

type EagerUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly email: string;
  readonly phone?: string | null;
  readonly firstName?: string | null;
  readonly lastName?: string | null;
  readonly nickName?: string | null;
  readonly avatar?: string | null;
  readonly timezone?: string | null;
  readonly acceptedAgreements?: string[] | null;
  readonly stripeId?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly email: string;
  readonly phone?: string | null;
  readonly firstName?: string | null;
  readonly lastName?: string | null;
  readonly nickName?: string | null;
  readonly avatar?: string | null;
  readonly timezone?: string | null;
  readonly acceptedAgreements?: string[] | null;
  readonly stripeId?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type User = LazyLoading extends LazyLoadingDisabled ? EagerUser : LazyUser

export declare const User: (new (init: ModelInit<User>) => User) & {
  copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}

type EagerTemplate = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Template, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly fileArn?: string | null;
  readonly blocks?: (TemplateBlock | null)[] | null;
  readonly editors?: string[] | null;
  readonly viewers?: string[] | null;
  readonly file?: S3Object | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTemplate = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Template, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly fileArn?: string | null;
  readonly blocks: AsyncCollection<TemplateBlock>;
  readonly editors?: string[] | null;
  readonly viewers?: string[] | null;
  readonly file?: S3Object | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Template = LazyLoading extends LazyLoadingDisabled ? EagerTemplate : LazyTemplate

export declare const Template: (new (init: ModelInit<Template>) => Template) & {
  copyOf(source: Template, mutator: (draft: MutableModel<Template>) => MutableModel<Template> | void): Template;
}

type EagerTemplateBlock = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<TemplateBlock, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly template: Template;
  readonly tlx: number;
  readonly tly: number;
  readonly trx: number;
  readonly try: number;
  readonly blx: number;
  readonly bly: number;
  readonly brx: number;
  readonly bry: number;
  readonly contentType: ContentType | keyof typeof ContentType;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly templateBlocksId?: string | null;
}

type LazyTemplateBlock = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<TemplateBlock, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly template: AsyncItem<Template>;
  readonly tlx: number;
  readonly tly: number;
  readonly trx: number;
  readonly try: number;
  readonly blx: number;
  readonly bly: number;
  readonly brx: number;
  readonly bry: number;
  readonly contentType: ContentType | keyof typeof ContentType;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly templateBlocksId?: string | null;
}

export declare type TemplateBlock = LazyLoading extends LazyLoadingDisabled ? EagerTemplateBlock : LazyTemplateBlock

export declare const TemplateBlock: (new (init: ModelInit<TemplateBlock>) => TemplateBlock) & {
  copyOf(source: TemplateBlock, mutator: (draft: MutableModel<TemplateBlock>) => MutableModel<TemplateBlock> | void): TemplateBlock;
}

type EagerDocument = {
  readonly [__modelMeta__]: {
    identifier: CustomIdentifier<Document, 'arn'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly arn: string;
  readonly name: string;
  readonly template?: Template | null;
  readonly blocks?: (DocumentBlock | null)[] | null;
  readonly editors?: string[] | null;
  readonly viewers?: string[] | null;
  readonly file?: S3Object | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly documentTemplateId?: string | null;
}

type LazyDocument = {
  readonly [__modelMeta__]: {
    identifier: CustomIdentifier<Document, 'arn'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly arn: string;
  readonly name: string;
  readonly template: AsyncItem<Template | undefined>;
  readonly blocks: AsyncCollection<DocumentBlock>;
  readonly editors?: string[] | null;
  readonly viewers?: string[] | null;
  readonly file?: S3Object | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly documentTemplateId?: string | null;
}

export declare type Document = LazyLoading extends LazyLoadingDisabled ? EagerDocument : LazyDocument

export declare const Document: (new (init: ModelInit<Document>) => Document) & {
  copyOf(source: Document, mutator: (draft: MutableModel<Document>) => MutableModel<Document> | void): Document;
}

type EagerDocumentBlock = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<DocumentBlock, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly template?: Template | null;
  readonly templateBlock?: TemplateBlock | null;
  readonly tlx?: number | null;
  readonly tly?: number | null;
  readonly trx?: number | null;
  readonly try?: number | null;
  readonly blx?: number | null;
  readonly bly?: number | null;
  readonly brx?: number | null;
  readonly bry?: number | null;
  readonly contentType: ContentType | keyof typeof ContentType;
  readonly originalContent?: string | null;
  readonly parsedContent?: string | null;
  readonly correctedContent?: string | null;
  readonly corrections?: (UserActivity | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly documentBlocksArn?: string | null;
  readonly documentBlockTemplateId?: string | null;
  readonly documentBlockTemplateBlockId?: string | null;
}

type LazyDocumentBlock = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<DocumentBlock, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly template: AsyncItem<Template | undefined>;
  readonly templateBlock: AsyncItem<TemplateBlock | undefined>;
  readonly tlx?: number | null;
  readonly tly?: number | null;
  readonly trx?: number | null;
  readonly try?: number | null;
  readonly blx?: number | null;
  readonly bly?: number | null;
  readonly brx?: number | null;
  readonly bry?: number | null;
  readonly contentType: ContentType | keyof typeof ContentType;
  readonly originalContent?: string | null;
  readonly parsedContent?: string | null;
  readonly correctedContent?: string | null;
  readonly corrections: AsyncCollection<UserActivity>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly documentBlocksArn?: string | null;
  readonly documentBlockTemplateId?: string | null;
  readonly documentBlockTemplateBlockId?: string | null;
}

export declare type DocumentBlock = LazyLoading extends LazyLoadingDisabled ? EagerDocumentBlock : LazyDocumentBlock

export declare const DocumentBlock: (new (init: ModelInit<DocumentBlock>) => DocumentBlock) & {
  copyOf(source: DocumentBlock, mutator: (draft: MutableModel<DocumentBlock>) => MutableModel<DocumentBlock> | void): DocumentBlock;
}

type EagerUserActivity = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserActivity, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userID: string;
  readonly activity: string;
  readonly tags?: (string | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly documentBlockCorrectionsId?: string | null;
}

type LazyUserActivity = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserActivity, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userID: string;
  readonly activity: string;
  readonly tags?: (string | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly documentBlockCorrectionsId?: string | null;
}

export declare type UserActivity = LazyLoading extends LazyLoadingDisabled ? EagerUserActivity : LazyUserActivity

export declare const UserActivity: (new (init: ModelInit<UserActivity>) => UserActivity) & {
  copyOf(source: UserActivity, mutator: (draft: MutableModel<UserActivity>) => MutableModel<UserActivity> | void): UserActivity;
}

type EagerRecordedNote = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<RecordedNote, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly editors?: string[] | null;
  readonly viewers?: string[] | null;
  readonly recording?: S3Object | null;
  readonly transcription?: string | null;
  readonly comprehension?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyRecordedNote = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<RecordedNote, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly editors?: string[] | null;
  readonly viewers?: string[] | null;
  readonly recording?: S3Object | null;
  readonly transcription?: string | null;
  readonly comprehension?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type RecordedNote = LazyLoading extends LazyLoadingDisabled ? EagerRecordedNote : LazyRecordedNote

export declare const RecordedNote: (new (init: ModelInit<RecordedNote>) => RecordedNote) & {
  copyOf(source: RecordedNote, mutator: (draft: MutableModel<RecordedNote>) => MutableModel<RecordedNote> | void): RecordedNote;
}