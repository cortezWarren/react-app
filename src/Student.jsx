const Student = (props) => {
    return (
    <>
    <div className="student">
        <div className="name">Name: {props.name}</div>
        <div className="age">Age: {props.age}</div>
        <div className="is-student">Student: {props.isStudent ? "Yes" : "No"}</div>
    </div>
    </>
    );
}
 
export default Student;