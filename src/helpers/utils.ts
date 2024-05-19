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

export const formatTimestamp = (timestamp: number): string => {
  const date = new Date(timestamp);
  const now = new Date();
  const diffInMs = now.getTime() - date.getTime();
  const diffInMinutes = Math.floor(diffInMs / 60000);
  const diffInHours = Math.floor(diffInMinutes / 60);
  const diffInDays = Math.floor(diffInHours / 24);

  if (diffInMinutes < 60) {
    return `${diffInMinutes} min ago`;
  } else if (diffInHours < 24) {
    return `${diffInHours} hours ago`;
  } else if (diffInDays < 7) {
    const daysOfWeek = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];
    return daysOfWeek[date.getUTCDay()];
  } else {
    const day = date.getUTCDate();
    const monthNames = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    const month = monthNames[date.getUTCMonth()];
    const year = date.getUTCFullYear();
    const daysOfWeek = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];
    const dayOfWeek = daysOfWeek[date.getUTCDay()];
    return `${dayOfWeek}, ${day} ${month} ${year}`;
  }
};

export const checkImage = (img: string | null, errorLoad: boolean): boolean => {
  return img !== null && !errorLoad;
};
