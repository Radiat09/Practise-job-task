import axios from "axios";
import useAuth from "../../../hooks/useAuth";
import toast from "react-hot-toast";

const CreateTask = () => {
  const { user } = useAuth();
  const handleCreateTask = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const deadline = form.deadline.value;
    const priority = form.priority.value;
    const description = form.description.value;
    const creationDate = new Date();
    const taskData = {
      title,
      deadline,
      priority,
      description,
      creationDate,
      status: "ongoing",
      email: user.email,
    };
    // console.log(taskData);
    const taskId = toast.loading("Processing....");
    axios
      .post("http://localhost:9200/api/v1/tasks", taskData)
      .then((res) => {
        // console.log(res.data);
        if (res.data.insertedId) {
          toast.success("Task Created Succesfully!", { id: taskId });
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.message);
      });
  };
  return (
    <div className="">
      <div className="form-container mx-auto">
        <form onSubmit={handleCreateTask} className="form">
          <div className="form-group">
            <label htmlFor="title">Task Title</label>
            <input type="text" id="title" name="title" required="" />
          </div>
          <div className="form-group">
            <label htmlFor="deadline">Deadline</label>
            <input
              type="datetime-local"
              id="deadline"
              name="deadline"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="priority">Priority</label>
            <select
              className="py-3 rounded-lg bg-[#212121] border border-[#414141]"
              required
              id="priority"
              name="priority"
            >
              <option>Low</option>
              <option>Moderate</option>
              <option>High</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              name="description"
              id="description"
              rows="10"
              cols="50"
              required=""
            ></textarea>
          </div>
          <button className="form-submit-btn" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateTask;
