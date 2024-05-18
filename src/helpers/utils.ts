import {DataInFirebase} from '../common/types';

export const convertFromObjectToArray = (data: DataInFirebase) =>
  Object.keys(data).map((id, index) => ({
    id: id,
    title: data[id].title,
    imgeUrl: data[id].imgeUrl || null,
    link: data[id].link || null,
    message: data[id].message,
    createdAt: data[id].createdAt,
  }));
