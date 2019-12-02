require('dotenv').config();
const AWS = require('aws-sdk');
const { AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY, S3_BUCKET } = process.env;

module.exports = {
  signs3: (req, res) => {
    AWS.config = {
      region: 'us-west-2',
      accessKeyId: AWS_ACCESS_KEY_ID,
      secretAccessKey: AWS_SECRET_ACCESS_KEY
    };
    const s3 = new AWS.S3({ signatureVersion: 'v4' });
    const fileName = req.query['file-name'];
    const fileType = req.query['file-type'];
    console.log('fileName: ', fileName, 'fileType: ', fileType);
    const params = {
      Bucket: S3_BUCKET,
      Key: fileName,
      Expires: 60,
      ContentType: fileType,
      ACL: 'public-read'
    };

    s3.getSignedUrl('putObject', params, (err, data) => {
      if (err) {
        console.log(err);
        res.end();
      }
      const dataToSend = {
        signedRequest: data,
        url: `https://${S3_BUCKET}.s3.amazonaws.com/${fileName}`
      };
      return res.send(dataToSend);
    });
  }
};
