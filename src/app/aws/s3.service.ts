import {environment} from "../../environments/environment";
import {CognitoUtil} from "./cognito.service";
import * as AWS from "aws-sdk/global";
import * as S3 from "aws-sdk/clients/s3";

/**
 * Created by Vladimir Budilov
 */


export class S3Service {

    constructor(public cognitoUtil: CognitoUtil) {

    }

    private getS3(): any {
        AWS.config.update({
            region: environment.bucketRegion,
        });

        const clientParams: any = {
            region: environment.bucketRegion,
            apiVersion: '2006-03-01',
            params: {Bucket: environment.rekognitionBucket}
        };
        if (environment.s3_endpoint) {
            clientParams.endpoint = environment.s3_endpoint;
        }
        return new S3(clientParams);
    }

    public addPhoto(selectedFile: any): boolean {
        if (!selectedFile) {
            // console.log('Please choose a file to upload first.');
            return false;
        }
        const fileName = selectedFile.name;
        const albumPhotosKey = environment.albumName + '/' + this.cognitoUtil.getCognitoIdentity() + "/";
        const photoKey = albumPhotosKey + fileName;

        this.getS3().upload({
            Key: photoKey,
            ContentType: selectedFile.type,
            Body: selectedFile,
            StorageClass: 'STANDARD',
            ACL: 'private'
        }, function (err: any, data: any) {
            if (data == null) data = '';
            if (err) {
                // console.log('There was an error uploading your photo: ', err);
                return false;
            }
            // console.log('Successfully uploaded photo.');
            return true;
        });

        return false;
    }

    public deletePhoto(albumName: any, photoKey: any) {
        if (!albumName) albumName = '';
        // this.getS3().deleteObjectStore("").promise().then(function () {
        //
        // }
        this.getS3().deleteObject({Key: photoKey}, function (err: any, data: any) {
            if (!data) data = '';
            if (err) {
                // console.log('There was an error deleting your photo: ', err.message);
                return;
            }
            // console.log('Successfully deleted photo.');
        });
    }

    public viewAlbum(albumName: any) {
        if (!albumName) albumName = '';
        const albumPhotosKey = encodeURIComponent(environment.albumName) + '//';
        this.getS3().listObjects({Prefix: albumPhotosKey}, function (err: any, data: any) {
            if (!data) data = '';
            if (err) {
                // console.log('There was an error viewing your album: ' + err);
            }

        });
    }

}
