import * as functions from 'firebase-functions';
import AWSService from './services/aws.service'
import {BUCKET_NAME} from './services/aws.constants';
// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
export const awsList = functions.https.onRequest((request, response) => {
    new AWSService().createAWS().listObjectsV2({
        Bucket: BUCKET_NAME, 
        MaxKeys: 1000
       },(data,err)=>{
           if(err){
            response.status(500).send(err);
           }
           console.log(JSON.parse(data));
           response.status(200).json({"total":JSON.parse(data).KeyCount});
           //response.status(200).send(data);
       });
});
