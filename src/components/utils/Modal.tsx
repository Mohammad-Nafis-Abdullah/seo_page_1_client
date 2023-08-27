import axios from "axios";
import { Dispatch, FormEvent, SetStateAction, useRef, useState } from "react";

interface modal_schema {
    id: string;
    status: string;
    refetch: () => void;
    setDisplayModal: Dispatch<SetStateAction<boolean>>;
    displayModal: boolean;
}

const Modal = ({
    refetch,
    status,
    setDisplayModal,
    displayModal,
    id,
}: modal_schema) => {
    const [files, setFiles] = useState<File[]>([] as File[]);
    const fileInput_ref = useRef<HTMLInputElement | null>(null);

    const handleClose = () => {
        setFiles([]);
        setDisplayModal(false);
        if (fileInput_ref.current) {
            fileInput_ref.current.value = "";
        }
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // upload files by form
        const form = new FormData();
        files.forEach((file)=> {
            form.append('files',file);
        })

        try {
            await axios.patch(`${import.meta.env.VITE_API_URL}/collections/${status}/${id}`,form);
        } catch (err) {
            console.log(err);
        }

        refetch();
        handleClose();
    };

    return (
        <section
            className={`bg-slate-950/60 backdrop-blur-[2px] z-[999] fixed top-0 bottom-0 left-0 right-0 flex justify-center items-center p-3 ${
                displayModal ? "block" : "hidden"
            }`}
        >
            <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-y-5 absolute bg-white p-5 rounded-lg"
            >
                {/* modal title */}
                <h3 className="font-bold text-lg">Upload Attachments</h3>

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

                <div className="flex justify-between">
                    <button
                        type="submit"
                        disabled={!files.length}
                        className="btn btn-success"
                    >
                        Upload
                    </button>
                    <button
                        onClick={handleClose}
                        type="button"
                        className="btn btn-error"
                    >
                        Close!
                    </button>
                </div>
            </form>
        </section>
    );
};

export default Modal;
