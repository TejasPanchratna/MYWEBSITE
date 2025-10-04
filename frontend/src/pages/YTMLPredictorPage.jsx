import React, { useState } from "react";
import axios from "axios";

// --- Dropdown Data ---
const youtubeCategories = [
  { id: 2, name: "Autos & Vehicles" },
  { id: 1, name: "Film & Animation" },
  { id: 10, name: "Music" },
  { id: 15, name: "Pets & Animals" },
  { id: 17, name: "Sports" },
  { id: 19, name: "Travel & Events" },
  { id: 20, name: "Gaming" },
  { id: 22, name: "People & Blogs" },
  { id: 23, name: "Comedy" },
  { id: 24, name: "Entertainment" },
  { id: 25, name: "News & Politics" },
  { id: 26, name: "Howto & Style" },
  { id: 27, name: "Education" },
  { id: 28, name: "Science & Technology" },
  { id: 29, name: "Nonprofits & Activism" },
];

const publishDays = [
  { id: 0, name: "Sunday" },
  { id: 1, name: "Monday" },
  { id: 2, name: "Tuesday" },
  { id: 3, name: "Wednesday" },
  { id: 4, name: "Thursday" },
  { id: 5, name: "Friday" },
  { id: 6, name: "Saturday" },
];

// --- Prediction Flowchart ---
const PredictionFlowchart = () => (
  <div className="flex flex-col items-center justify-center min-h-[300px] bg-base-100 rounded-lg p-6 transition-colors duration-300">
    <p className="font-semibold mb-4 text-base-content/80 transition-colors duration-300">
      PREDICTION PROCESS
    </p>
    <ul className="steps steps-vertical">
      <li className="step step-primary">Data Submitted to NestJS</li>
      <li className="step step-primary">Saved to MongoDB</li>
      <li className="step step-primary">Calling FastAPI ML Model</li>
      <li className="step">Generating Prediction</li>
    </ul>
    <span className="loading loading-dots loading-md mt-4 text-primary"></span>
  </div>
);

function YTMLPredictorPage() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category_id: 28,
    duration_in_minutes: "",
    subscriber_count: "",
    channel_video_count: "",
    channel_view_count: "",
    channel_start_date: "",
    publish_hour: 17,
    publish_day_of_week: 4,
  });

  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const isNumberField = [
      "category_id",
      "duration_in_minutes",
      "subscriber_count",
      "channel_video_count",
      "channel_view_count",
      "publish_hour",
      "publish_day_of_week",
    ].includes(name);

    setFormData((prev) => ({
      ...prev,
      [name]: isNumberField ? Number(value) : value,
    }));
  };

  const getChannelAgeDays = () => {
    if (!formData.channel_start_date) return 0;
    const start = new Date(formData.channel_start_date);
    const today = new Date();
    return Math.floor((today - start) / (1000 * 60 * 60 * 24));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setPrediction(null);
    setError(null);

    const payload = { ...formData, channel_age_days: getChannelAgeDays() };
    const MIN_LOADING_TIME = 600;
    const startTime = Date.now();

    try {
      const response = await axios.post(
        "http://localhost:3000/api/predictions",
        payload
      );
      const elapsedTime = Date.now() - startTime;
      const remainingTime = MIN_LOADING_TIME - elapsedTime;
      if (remainingTime > 0) await new Promise((r) => setTimeout(r, remainingTime));
      setPrediction(response.data);
    } catch (err) {
      console.error(err);
      setError("Failed to get prediction. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-base-200 pt-24 px-6 transition-colors duration-300">
      {/* --- MAIN HEADING --- */}
      <section className="max-w-4xl mx-auto mb-12 text-center transition-colors duration-300">
        <h1
          className="text-5xl font-bold mb-4 text-base-content transition-colors duration-300"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          YouTube Views Predictor
        </h1>
        <p className="text-lg text-base-content/70 transition-colors duration-300">
          Forecast your video’s potential views using video and channel metrics.
        </p>
      </section>

      {/* --- FORM & PREDICTION --- */}
      <section className="max-w-7xl mx-auto transition-colors duration-300">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* FORM */}
          <form
            onSubmit={handleSubmit}
            className="bg-base-100 shadow-xl rounded-lg p-6 grid grid-cols-2 gap-4 transition-colors duration-300"
          >
            <div className="col-span-2">
              <label className="label">
                <span className="label-text text-base-content">Video Title</span>
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="input input-bordered w-full input-sm bg-base-100 text-base-content transition-colors duration-300"
                required
              />
            </div>
            <div className="col-span-2">
              <label className="label">
                <span className="label-text text-base-content">Description</span>
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="textarea textarea-bordered h-20 w-full textarea-sm bg-base-100 text-base-content transition-colors duration-300"
              />
            </div>

            <div>
              <label className="label">
                <span className="label-text text-base-content">Category</span>
              </label>
              <select
                name="category_id"
                value={formData.category_id}
                onChange={handleChange}
                className="select select-bordered w-full select-sm bg-base-100 text-base-content transition-colors duration-300"
              >
                {youtubeCategories.map((cat) => (
                  <option key={cat.id} value={cat.id}>
                    {cat.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="label">
                <span className="label-text text-base-content">Duration (minutes)</span>
              </label>
              <input
                type="number"
                name="duration_in_minutes"
                value={formData.duration_in_minutes}
                onChange={handleChange}
                className="input input-bordered w-full input-sm bg-base-100 text-base-content transition-colors duration-300"
                required
              />
            </div>

            <div>
              <label className="label">
                <span className="label-text text-base-content">Subscribers</span>
              </label>
              <input
                type="number"
                name="subscriber_count"
                value={formData.subscriber_count}
                onChange={handleChange}
                className="input input-bordered w-full input-sm bg-base-100 text-base-content transition-colors duration-300"
                required
              />
            </div>
            <div>
              <label className="label">
                <span className="label-text text-base-content">Total Channel Videos</span>
              </label>
              <input
                type="number"
                name="channel_video_count"
                value={formData.channel_video_count}
                onChange={handleChange}
                className="input input-bordered w-full input-sm bg-base-100 text-base-content transition-colors duration-300"
                required
              />
            </div>

            <div>
              <label className="label">
                <span className="label-text text-base-content">Total Channel Views</span>
              </label>
              <input
                type="number"
                name="channel_view_count"
                value={formData.channel_view_count}
                onChange={handleChange}
                className="input input-bordered w-full input-sm bg-base-100 text-base-content transition-colors duration-300"
                required
              />
            </div>
            <div>
              <label className="label">
                <span className="label-text text-base-content">Channel Start Date</span>
              </label>
              <input
                type="date"
                name="channel_start_date"
                value={formData.channel_start_date}
                onChange={handleChange}
                className="input input-bordered w-full input-sm bg-base-100 text-base-content transition-colors duration-300"
                required
              />
            </div>

            <div>
              <label className="label">
                <span className="label-text text-base-content">Publish Hour (0-23)</span>
              </label>
              <input
                type="number"
                name="publish_hour"
                min="0"
                max="23"
                value={formData.publish_hour}
                onChange={handleChange}
                className="input input-bordered w-full input-sm bg-base-100 text-base-content transition-colors duration-300"
                required
              />
            </div>
            <div>
              <label className="label">
                <span className="label-text text-base-content">Publish Day</span>
              </label>
              <select
                name="publish_day_of_week"
                value={formData.publish_day_of_week}
                onChange={handleChange}
                className="select select-bordered w-full select-sm bg-base-100 text-base-content transition-colors duration-300"
              >
                {publishDays.map((day) => (
                  <option key={day.id} value={day.id}>
                    {day.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="col-span-2">
              <button
                type="submit"
                className="btn btn-primary w-full mt-2 transition-colors duration-300"
                disabled={loading}
              >
                {loading ? <span className="loading loading-spinner"></span> : "Get Prediction"}
              </button>
            </div>
          </form>

          {/* PREDICTION RESULT */}
          <div className="flex flex-col gap-4 transition-colors duration-300">
            {loading && <PredictionFlowchart />}
            {error && (
              <div className="bg-base-100 shadow-xl p-6 flex items-center justify-center min-h-[300px] transition-colors duration-300 text-error text-center">
                {error}
              </div>
            )}
            {prediction && !loading && (
              <div className="bg-base-100 shadow-xl p-6 flex flex-col items-center justify-center min-h-[300px] transition-colors duration-300">
                <div className="text-center">
                  <div className="stat">
                    <div className="stat-title text-base-content">Predicted Tier</div>
                    <div className="stat-value text-secondary">
                      {prediction.predicted_engagement_tier}
                    </div>
                  </div>
                  <div className="stat mt-4">
                    <div className="stat-title text-base-content">Predicted Views</div>
                    <div className="stat-value text-primary">
                      {prediction.predicted_view_count.toLocaleString()}
                    </div>
                  </div>
                </div>
              </div>
            )}
            {!prediction && !loading && !error && (
              <div className="bg-base-100 shadow-xl p-6 flex items-center justify-center min-h-[300px] transition-colors duration-300 text-base-content/60 text-center">
                Prediction results will appear here.
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default YTMLPredictorPage;
