"use client";

import { useCallback } from "react";
import { useDropzone } from "react-dropzone";

export default function ResumePage() {
    const onDrop = useCallback(async (acceptedFiles: File[]) => {
        const file = acceptedFiles[0];

        if (!file) return;

        const formData = new FormData();
        formData.append("file", file);

        const response = await fetch("/api/resume", {
            method: "POST",
            body: formData,
        });

        const data = await response.json();

        console.log(data.text);

        alert("Resume parsed successfully!");

        alert("Resume uploaded successfully!");
    }, []);
    const { getRootProps, getInputProps, isDragActive } =
        useDropzone({
            accept: {
                "application/pdf": [".pdf"],
            },
            maxFiles: 1,
            onDrop,
        });

    return (
        <main className="min-h-screen bg-gray-100 p-10">
            <div className="mx-auto max-w-3xl rounded-xl bg-white p-10 shadow">
                <h1 className="mb-8 text-3xl font-bold">
                    Upload Resume
                </h1>

                <div
                    {...getRootProps()}
                    className="cursor-pointer rounded-xl border-2 border-dashed border-blue-400 p-16 text-center"
                >
                    <input {...getInputProps()} />

                    {isDragActive ? (
                        <p>Drop your resume here...</p>
                    ) : (
                        <p>
                            Drag & Drop your PDF here
                            <br />
                            or click to browse
                        </p>
                    )}
                </div>
            </div>
        </main>
    );
}