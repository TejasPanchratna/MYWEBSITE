import React, { useState } from "react";
import axios from "axios";

// --- Data for Form Dropdowns ---
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
  <div className="flex flex-col items-center justify-center min-h-[300px] bg-base-200 rounded-lg p-6">
    <p className="font-semibold mb-4 text-base-content/80">PREDICTION PROCESS</p>
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

    setFormData((prevState) => ({
      ...prevState,
      [name]: isNumberField ? Number(value) : value,
    }));
  };

  const getChannelAgeDays = () => {
    if (!formData.channel_start_date) return 0;
    const start = new Date(formData.channel_start_date);
    const today = new Date();
    const diffTime = today - start;
    return Math.floor(diffTime / (1000 * 60 * 60 * 24));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);
  setPrediction(null);
  setError(null);

  const payload = { ...formData, channel_age_days: getChannelAgeDays() };

  const MIN_LOADING_TIME = 10000; // 6 seconds
  const startTime = Date.now();

  try {
    const response = await axios.post(
      "http://localhost:3000/api/predictions",
      payload
    );

    // Calculate how much time has passed
    const elapsedTime = Date.now() - startTime;
    const remainingTime = MIN_LOADING_TIME - elapsedTime;

    if (remainingTime > 0) {
      // Wait for the remaining time to ensure min 6s loading
      await new Promise((resolve) => setTimeout(resolve, remainingTime));
    }

    setPrediction(response.data);
  } catch (err) {
    console.error("Error submitting data:", err);
    setError("Failed to get prediction. Please try again.");
  } finally {
    setLoading(false);
  }
};


  return (
    <div className="bg-base-200 py-10 px-6 w-full">
      {/* --- PROJECT OVERVIEW --- */}
      <section className="max-w-7xl mx-auto mb-12">
        <h1
          className="text-5xl font-bold text-primary text-center mb-4"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          YouTube Views Predictor
        </h1>
        <p className="text-center text-lg text-base-content/80">
          End-to-end ML project forecasting a video’s potential views using video
          attributes, channel metrics, and publishing patterns.
        </p>
      </section>

      {/* --- EDA IMAGES --- */}
      <section className="max-w-7xl mx-auto mb-12 overflow-x-auto flex gap-6">
        <div className="min-w-[300px] bg-base-100 shadow-xl rounded-lg p-4 flex-shrink-0">
          <p className="text-center font-semibold mb-2">Subscribers Distribution</p>
          <img src="/eda/subscribers_hist.png" alt="Subscribers EDA" />
        </div>
        <div className="min-w-[300px] bg-base-100 shadow-xl rounded-lg p-4 flex-shrink-0">
          <p className="text-center font-semibold mb-2">Views Distribution</p>
          <img src="/eda/views_hist.png" alt="Views EDA" />
        </div>
        <div className="min-w-[300px] bg-base-100 shadow-xl rounded-lg p-4 flex-shrink-0">
          <p className="text-center font-semibold mb-2">Correlation Heatmap</p>
          <img src="/eda/correlation_heatmap.png" alt="Correlation Heatmap" />
        </div>
      </section>

      {/* --- FORM & PREDICTION --- */}
      <section className="max-w-7xl mx-auto mb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* --- FORM --- */}
          <form
            onSubmit={handleSubmit}
            className="bg-base-100 shadow-xl rounded-lg p-6 grid grid-cols-2 gap-4"
          >
            {/* Video Info */}
            <div className="col-span-2">
              <label className="label">
                <span className="label-text">Video Title</span>
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="input input-bordered w-full input-sm"
                required
              />
            </div>
            <div className="col-span-2">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="textarea textarea-bordered h-20 w-full textarea-sm"
              />
            </div>
            <div>
              <label className="label">
                <span className="label-text">Category</span>
              </label>
              <select
                name="category_id"
                value={formData.category_id}
                onChange={handleChange}
                className="select select-bordered w-full select-sm"
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
                <span className="label-text">Duration (minutes)</span>
              </label>
              <input
                type="number"
                name="duration_in_minutes"
                value={formData.duration_in_minutes}
                onChange={handleChange}
                className="input input-bordered w-full input-sm"
                required
              />
            </div>

            {/* Channel Info */}
            <div>
              <label className="label">
                <span className="label-text">Subscribers</span>
              </label>
              <input
                type="number"
                name="subscriber_count"
                value={formData.subscriber_count}
                onChange={handleChange}
                className="input input-bordered w-full input-sm"
                required
              />
            </div>
            <div>
              <label className="label">
                <span className="label-text">Total Channel Videos</span>
              </label>
              <input
                type="number"
                name="channel_video_count"
                value={formData.channel_video_count}
                onChange={handleChange}
                className="input input-bordered w-full input-sm"
                required
              />
            </div>
            <div>
              <label className="label">
                <span className="label-text">Total Channel Views</span>
              </label>
              <input
                type="number"
                name="channel_view_count"
                value={formData.channel_view_count}
                onChange={handleChange}
                className="input input-bordered w-full input-sm"
                required
              />
            </div>
            <div>
              <label className="label">
                <span className="label-text">Channel Start Date</span>
              </label>
              <input
                type="date"
                name="channel_start_date"
                value={formData.channel_start_date}
                onChange={handleChange}
                className="input input-bordered w-full input-sm"
                required
              />
            </div>

            {/* Publish Info */}
            <div>
              <label className="label">
                <span className="label-text">Publish Hour (0-23)</span>
              </label>
              <input
                type="number"
                name="publish_hour"
                min="0"
                max="23"
                value={formData.publish_hour}
                onChange={handleChange}
                className="input input-bordered w-full input-sm"
                required
              />
            </div>
            <div>
              <label className="label">
                <span className="label-text">Publish Day</span>
              </label>
              <select
                name="publish_day_of_week"
                value={formData.publish_day_of_week}
                onChange={handleChange}
                className="select select-bordered w-full select-sm"
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
                className="btn btn-primary w-full mt-2"
                disabled={loading}
              >
                {loading ? <span className="loading loading-spinner"></span> : "Get Prediction"}
              </button>
            </div>
          </form>

          {/* --- Prediction Output --- */}
          <div className="lg:col-span-1 flex flex-col gap-4">
            {loading && <PredictionFlowchart />}
            {error && (
              <div className="card bg-base-200 shadow-xl p-6 flex items-center justify-center min-h-[300px]">
                <div className="text-center text-error">{error}</div>
              </div>
            )}
            {prediction && !loading && (
              <div className="card bg-base-200 shadow-xl p-6 flex items-center justify-center min-h-[300px]">
                <div className="text-center">
                  <div className="stat">
                    <div className="stat-title">Predicted Tier</div>
                    <div className="stat-value text-secondary">
                      {prediction.predicted_engagement_tier}
                    </div>
                  </div>
                  <div className="stat mt-4">
                    <div className="stat-title">Predicted Views</div>
                    <div className="stat-value text-primary">
                      {prediction.predicted_view_count.toLocaleString()}
                    </div>
                  </div>
                </div>
              </div>
            )}
            {!prediction && !loading && !error && (
              <div className="card bg-base-200 shadow-xl p-6 flex items-center justify-center min-h-[300px]">
                <div className="text-center text-base-content/60">
                  <p className="text-xl">Prediction results will appear here.</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default YTMLPredictorPage;
