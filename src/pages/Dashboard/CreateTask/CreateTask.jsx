const CreateTask = () => {
  const handleCreateTask = (e) => {
    e.preventDefault();
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
