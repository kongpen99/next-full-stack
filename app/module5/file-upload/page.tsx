"use client";

import { uploadImage } from "./action";

export default function FileUpload() {

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">File Upload</h1>
            <form

                action={uploadImage}

                className="space-y-4 border p-4 rounded shadow"
            >
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">

                        Image
                    </label>
                    <input

                        type="file"

                        name="imagelink"

                        className="border rounded p-2 block text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-blue-100 file:text-blue-700 hover:file:bg-blue-100"

                        accept="image/*"

                    />
                </div>
                <button

                    type="submit"

                    className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition-colors"
                >

                    Upload
                </button>
            </form>
        </div>

    );

}
