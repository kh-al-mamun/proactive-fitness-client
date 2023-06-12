import Loader from "../../../components/Loader";
import useUser from "../../../hooks/useUser";
import AdminHome from "./AdminHome";
import InstructorHome from "./InstructorHome";
import StudentHome from "./StudentHome";

const DashHome = () => {
    const { person, isLoading } = useUser();
    if (isLoading) {
        return <Loader />
    }
    console.log(person)

    return (
        <div>
            {
                person.role === 'admin' ?
                    <AdminHome /> :
                    person.role === 'instructor' ?
                        <InstructorHome /> :
                        <StudentHome />
            }

        </div>
    );
};

export default DashHome;