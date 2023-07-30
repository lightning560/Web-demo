export enum UploadType {
    Image = 'image',
    TrainingImages = 'training-images',
    Model = 'model',
    Default = 'default'
}
export type UploadTypeUnion = `${UploadType}`;

export enum FeedCardType {
    Image = 'image',
    Video = 'video',
    Default = 'default'
}