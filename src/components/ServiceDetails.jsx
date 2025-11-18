import EquipmentShop from "./EquipmentShop";
import GroupWorkouts from "./GroupWorkouts";
import StrengthCardio from "./StrengthCardio";
import { useParams } from "react-router-dom";

const serviceComponents = {
  "equipment": EquipmentShop,
  "group-workouts": GroupWorkouts,
  "strength-cardio": StrengthCardio,
};

export default function ServiceDetails() {
  const { serviceType } = useParams();
  const Component = serviceComponents[serviceType];


  return <Component />;
}
