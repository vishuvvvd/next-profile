import { NextResponse } from 'next/server';

import { handleApiError } from '@/lib/errorHandler';

export async function GET() {
  try {
    // Your logic here (e.g., fetch data from DB)
    const data = {
      id: 1,
      name: 'Vishal',
      imageUrl: '/vishal.jpeg',
      bio: 'Passionate about creating interactive, visually appealing, and easy-to-use interfaces that stand out and offer smooth, intuitive experiences. I’m always pushing the limits of design, performance, and innovation to deliver outstanding solutions that enhance every user interaction.',
    };

    // You can replace the hardcoded data with a database call here
    // const data = await fetchDataFromDatabase();

    return NextResponse.json({ data });
  } catch (error) {
    return handleApiError(NextResponse, error); // Handle errors globally
  }
}
