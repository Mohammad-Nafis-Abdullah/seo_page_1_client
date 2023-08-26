import { useRef, useState } from "react";

const Modal = () => {
    const [files, setFiles] = useState<File[]>([] as File[]);
    const fileInput_ref = useRef<HTMLInputElement | null>(null);

    return (
        <>
            <input type="checkbox" id="my_modal_6" className="modal-toggle" />
            <section className="modal">
                <div className="modal-box">
                    <section className="flex flex-col gap-y-5">
                        {/* modal title */}
                        <h3 className="font-bold text-lg">
                            Upload attachments
                        </h3>

                        {/* upload preview */}
                        <div className="flex flex-col gap-2">
                            {files.map((file:File,i) => {
                                return (
                                    <span key={i} className="border-2 p-2 rounded-lg bg-slate-300 font-bold text-slate-600">
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
                                    e.target.files
                                        ? Array.from(e.target.files)
                                        : []
                                )
                            }
                            type="file"
                            multiple
                            className="file-input file-input-bordered w-full max-w-xs"
                        />
                    </section>

                    <span className="modal-action">
                        <label onClick={()=>{
                          setFiles([]);
                          if (fileInput_ref.current) {
                            fileInput_ref.current.value = '';
                          }
                        }} htmlFor="my_modal_6" className="btn">
                            Close!
                        </label>
                    </span>
                </div>
            </section>
        </>
    );
};

export default Modal;
