import useFetchData from "../../hooks/useFetchData";
import Loading from "../share/Loading/Loading";
import InfoCard from "../utils/InfoCard";

const type = "todo";

const Todo = () => {
    const { data, refetch, loading } = useFetchData(
        `${import.meta.env.VITE_API_URL}/collections/${type}`
    );

    return (
        <div className="main-card gap-y-3 flex flex-col">
            {loading && <Loading/>}
            <section className="relative flex">
                <progress
                    className="progress progress-accent w-full bg-slate-300 h-10"
                    value={15}
                    max="100"
                />
                <h3 className="absolute left-0 right-0 pl-[18%] font-bold text-slate-600 py-2">
                    To Do
                </h3>
                <h3 className="absolute right-3 top-2 bottom-2 w-7 text-center rounded font-bold text-slate-600 bg-slate-600/20 ">
                    0
                </h3>
            </section>

            <section className="overflow-y-auto grow pr-1 space-y-3">
                {data.slice(0, 6).map((cardData) => (
                    <InfoCard
                        key={cardData._id}
                        data={cardData}
                        refetch={refetch}
                        status={type}
                    />
                ))}
            </section>
        </div>
    );
};

export default Todo;
