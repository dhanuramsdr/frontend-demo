import ReusableTable from "../component/Table";
import { getProductMutaion } from "../Api/Reactquery";

const Producttable = () => {
  const productQuery = getProductMutaion();

  return (
    <div>
      <ReusableTable
        title="Product table"
        queryResult={productQuery}
        state={false}
      />
    </div>
  );
};

export default Producttable;
