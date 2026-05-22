'use client';

import Image from 'next/image';

export default function PreviewPage() {
    return (
        <div>
            <h1>Preview</h1>
            <Image
                src="https://res.cloudinary.com/dlitizyri/image/upload/v1765613614/next-full-stack/1765613610739.png.png"
                alt=""
                width={500}
                height={500}
            />
        </div>
    )
}