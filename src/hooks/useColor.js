import { useState, useEffect } from "react";
import axios from "axios";

const useColors = () => {
  const [colors, setColors] = useState([]);
  const [loading, setLoading] = useState(false);

  // this function fetches the color
  const fetchColors = async () => {
    try {
      setLoading(true);
      const res = await axios.get(
        "https://mocki.io/v1/192a7795-995e-4f01-8d1d-564cddcd084e"
      );
      const { colors } = await res.data;
      setColors(colors);
      setLoading(false);
    } catch (err) {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchColors();
  }, []);

  return {
    loading,
    colors,
    fetchColors,
  };
};

export default useColors;
