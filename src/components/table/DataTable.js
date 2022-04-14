import React from "react";
import { columns } from "./columns";
import Card from "../UI/Card";
import classes from "./DataTable.module.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import { MDBDataTable } from "mdbreact";

export const DataTable = ({ tableData, title }) => {
  return (
    <section className={classes.transaction}>
      <Card>
        <div className={classes["transaction-header"]}>
          <h2>{title}</h2>
        </div>

        <MDBDataTable
          striped
          bordered
          small
          data={{ rows: tableData, columns }}
        />
      </Card>
    </section>
  );
};
