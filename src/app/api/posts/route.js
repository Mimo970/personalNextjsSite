import { NextResponse } from "next/server";
import connect from "@/utils/db";
import Post from "@/models/Post";
import bcrypt from "bcryptjs";
export const GET = async (request) => {
  const url = new URL(request.url);

  const username = url.searchParams.get("username");

  try {
    await connect();

    const posts = await Post.find(username && { username });

    return new NextResponse(JSON.stringify(posts), { status: 200 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};

// export const POST = async (request) => {
//   const body = await request.json();

//   const newPost = new Post(body);

//   try {
//     await connect();

//     await newPost.save();

//     return new NextResponse("Post has been created", { status: 201 });
//   } catch (err) {
//     return new NextResponse("Database Error", { status: 500 });
//   }
// };

export const POST = async (request) => {
  try {
    const { name, email, password } = await request.json();
    await connect();
    const hashedPassword = await bcrypt.hash(password, 5);
    const newUser = new User({ name, email, password: hashedPassword });
    await newUser.save();
    return new NextResponse("User has been created", { status: 201 });
  } catch (err) {
    console.error("Error creating user:", err);
    return new NextResponse(err.message, { status: 500 });
  }
};
