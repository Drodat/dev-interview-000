import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
interface FirestoreTimestamp {
  seconds: number;
  nanoseconds: number;
}

export function firestoreTimestampADate(timestamp: FirestoreTimestamp): string {
  const seconds: number = timestamp.seconds;
  const nanoseconds: number = timestamp.nanoseconds;
  const miliseconds: number = seconds * 1000 + nanoseconds / 1000000;
  const date: Date = new Date(miliseconds);
  const year: number = date.getFullYear();
  const month: string = String(date.getMonth() + 1).padStart(2, '0');
  const day: string = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}