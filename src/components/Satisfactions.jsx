import { satisfactions } from "../constants";
import styles from "../style";
import FeedbackCard from "./FeedbackCard";

const Satisfactions = () => (
  <div className=" bg-gradient py-10 px-5 md:px-10 text-center md:text-left rounded-2xl mb-10">
    <h2 className="text-2xl md:text-4xl font-bold mb-8 text-white">
      Your satisfaction, <span className="text-blue-600">guaranteed</span>
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-5">
      {/* Happiness Pledge */}
      <div className="bg-white p-10 rounded-lg shadow-md hover:shadow-lg">
        <h3 className="text-2xl font-semibold mb-2">Happiness Pledge</h3>
        <p className="text-gray-600 text-lg">
          If you’re not satisfied,{" "}
          <span className="font-bold text-lg">
            we’ll work to make it right.
          </span>
        </p>
      </div>
      {/* Vetted Taskers */}
      <div className="bg-white p-10 rounded-lg shadow-md hover:shadow-lg">
        <h3 className="text-xl font-semibold mb-2">Vetted Taskers</h3>
        <p className="text-gray-600 text-lg">
          Taskers are always background checked before joining the platform.
        </p>
      </div>
      {/* Dedicated Support */}
      <div className="bg-white p-10 rounded-lg shadow-md hover:shadow-lg">
        <h3 className="text-xl font-semibold mb-2">Dedicated Support</h3>
        <p className="text-gray-600 text-lg">
          Friendly service when you need us – every day of the week.
        </p>
      </div>
    </div>
  </div>
);

export default Satisfactions;
