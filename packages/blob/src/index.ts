import type { PutCommandOptions } from './put';
import { createPutMethod } from './put';
import { createCreateMultipartUploadMethod } from './multipart/create';
import type { UploadPartCommandOptions } from './multipart/upload';
import { createUploadPartMethod } from './multipart/upload';
import type { CompleteMultipartUploadCommandOptions } from './multipart/complete';
import { createCompleteMultipartUploadMethod } from './multipart/complete';
import type { CommonCreateBlobOptions } from './helpers';
import { createCreateMultipartUploaderMethod } from './multipart/create-uploader';

// expose generic BlobError and download url util
export {
  BlobError,
  getDownloadUrl,
  type OnUploadProgressCallback,
  type UploadProgressEvent,
} from './helpers';

// expose api BlobErrors
export {
  BlobAccessError,
  BlobNotFoundError,
  BlobStoreNotFoundError,
  BlobStoreSuspendedError,
  BlobUnknownError,
  BlobServiceNotAvailable,
  BlobRequestAbortedError,
  BlobServiceRateLimited,
  BlobContentTypeNotAllowedError,
  BlobPathnameMismatchError,
  BlobClientTokenExpiredError,
  BlobFileTooLargeError,
} from './api';

// khulnasoftBlob.put()

export type { PutBlobResult } from './put-helpers';
export type { PutCommandOptions };

/**
 * Uploads a blob into your store from your server.
 * Detailed documentation can be found here: https://khulnasoft.com/docs/khulnasoft-blob/using-blob-sdk#upload-a-blob
 *
 * If you want to upload from the browser directly, check out the documentation forAclient uploads: https://khulnasoft.com/docs/khulnasoft-blob/using-blob-sdk#client-uploads
 *
 * @param pathname - The pathname to upload the blob to, including the extension. This will influence the url of your blob like https://$storeId.public.blob.khulnasoft-storage.com/$pathname.
 * @param body - The content of your blob, can be a: string, File, Blob, Buffer or Stream. We support almost everything fetch supports: https://developer.mozilla.org/en-US/docs/Web/API/RequestInit#body.
 * @param options - Additional options like `token` or `contentType`.
 */
export const put = createPutMethod<PutCommandOptions>({
  allowedOptions: [
    'cacheControlMaxAge',
    'addRandomSuffix',
    'allowOverwrite',
    'contentType',
  ],
});

//  khulnasoftBlob.del()

export { del } from './del';

// khulnasoftBlob.head()

export type { HeadBlobResult } from './head';
export { head } from './head';

// khulnasoftBlob.list()

export type {
  ListBlobResultBlob,
  ListBlobResult,
  ListCommandOptions,
  ListFoldedBlobResult,
} from './list';
export { list } from './list';

// khulnasoftBlob.copy()

export type { CopyBlobResult, CopyCommandOptions } from './copy';
export { copy } from './copy';

// khulnasoftBlob. createMultipartUpload()
// khulnasoftBlob. uploadPart()
// khulnasoftBlob. completeMultipartUpload()
// khulnasoftBlob. createMultipartUploader()

export const createMultipartUpload =
  createCreateMultipartUploadMethod<CommonCreateBlobOptions>({
    allowedOptions: [
      'cacheControlMaxAge',
      'addRandomSuffix',
      'allowOverwrite',
      'contentType',
    ],
  });

export const createMultipartUploader =
  createCreateMultipartUploaderMethod<CommonCreateBlobOptions>({
    allowedOptions: [
      'cacheControlMaxAge',
      'addRandomSuffix',
      'allowOverwrite',
      'contentType',
    ],
  });

export type { UploadPartCommandOptions };
export const uploadPart = createUploadPartMethod<UploadPartCommandOptions>({
  allowedOptions: [
    'cacheControlMaxAge',
    'addRandomSuffix',
    'allowOverwrite',
    'contentType',
  ],
});

export type { CompleteMultipartUploadCommandOptions };
export const completeMultipartUpload =
  createCompleteMultipartUploadMethod<CompleteMultipartUploadCommandOptions>({
    allowedOptions: [
      'cacheControlMaxAge',
      'addRandomSuffix',
      'allowOverwrite',
      'contentType',
    ],
  });

export type { Part, PartInput } from './multipart/helpers';

export { createFolder } from './create-folder';
