const AWS = require('aws-sdk');
const s3 = new AWS.S3();

class SpeechToTextService {

  transcribeSvc = undefined;
  LANGUAGE_CODE = "en-US";
  constructor() {
    this.transcribeSvc = new AWS.TranscribeService();
  }

  async transcribe(bucket, region, key, cfg) {
    const fileUri = `https://${bucket}.s3.amazonaws.com/${key}`;
    console.log("FileUri", fileUri);
    let jobName = `transcribe-${new Date().getTime()}`;

    const params = {
      LanguageCode: this.LANGUAGE_CODE,
      Media: {
        MediaFileUri: fileUri
      },
      MediaFormat: "webm",
      TranscriptionJobName: jobName,
      OutputBucketName: bucket,
      OutputKey: jobName
    };

    const resp = await this.transcribeSvc.startTranscriptionJob(params).promise();
    return (await s3.getObject({Bucket: params.OutputBucketName, Key: params.OutputKey}));
  }
}
module.exports = SpeechToTextService;
