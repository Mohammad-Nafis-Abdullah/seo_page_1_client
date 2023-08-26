import { FormEvent, useRef, useState } from "react";

interface modal_schema{
    refetch: ()=>void,
}

const Modal = ({refetch}:modal_schema) => {
    const [files, setFiles] = useState<File[]>([] as File[]);
    const fileInput_ref = useRef<HTMLInputElement | null>(null);

    const handleClose = () => {
        setFiles([]);
        if (fileInput_ref.current) {
            fileInput_ref.current.value = "";
        }
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        refetch();
        handleClose();
    };

    return (
        <>
            <input type="checkbox" id="modal" className="modal-toggle" />
            <section className="modal">
                <form
                    onSubmit={handleSubmit}
                    className="modal-box flex flex-col gap-y-5"
                >
                    {/* modal title */}
                    <h3 className="font-bold text-lg">Upload attachments</h3>

                    {/* upload preview */}
                    <div className="flex flex-col gap-2">
                        {files.map((file: File, i) => {
                            return (
                                <span
                                    key={i}
                                    className="border-2 p-2 rounded-lg bg-slate-300 font-bold text-slate-600"
                                >
                                    {file.name}
                                </span>
                            );
                        })}
                    </div>

                    {/* file upload field */}
                    <input
                        ref={fileInput_ref}
                        onChange={(e) =>
                            setFiles(
                                e.target.files ? Array.from(e.target.files) : []
                            )
                        }
                        type="file"
                        multiple
                        className="file-input file-input-bordered w-full max-w-xs"
                    />

                    <div className="modal-action flex justify-between">
                        <button
                            type="submit"
                            className="btn btn-success"
                        >
                            Upload
                        </button>
                        <label
                            onClick={handleClose}
                            htmlFor="modal"
                            className="btn btn-error"
                        >
                            Close!
                        </label>
                    </div>
                </form>
            </section>
        </>
    );
};

export default Modal;
