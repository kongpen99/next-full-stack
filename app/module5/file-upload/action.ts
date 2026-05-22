'use server'

import { v2 as cloudinary } from "cloudinary";

export async function uploadImage(formData: FormData): Promise<void> {
    const file = formData.get("imagelink") as File;

    if (!file) return;

    cloudinary.config({
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_API_SECRET,
    })

    const timestamp = Date.now();
    const extension = file.name.split(".").pop();
    const filename = `${timestamp}.${extension}`;
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    try {
        await new Promise((resolve, reject) => {
            const stream = cloudinary.uploader.upload_stream(
                {
                    folder: "next-full-stack1",
                    public_id: filename,
                    overwrite: true,
                    resource_type: "auto",
                },
                (err, result) => {
                    if (err) {
                        console.log(err);
                        reject(err);
                    }
                    console.log(result);
                    resolve(result);
                }
            );
            stream.end(buffer);
        });
    } catch (error) {
        console.log('Error uploading image: ', error);
    }
    // ใช้ใน console เพื่อตรวจสอบค่า env

    // console.log(process.env.CLOUDINARY_CLOUD_NAME)
    // console.log(process.env.CLOUDINARY_API_KEY)
    // console.log(process.env.CLOUDINARY_API_SECRET)
}