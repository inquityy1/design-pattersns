import Document from './document';

export default interface ProtoType {
    clone(mode: number): Document;
}
