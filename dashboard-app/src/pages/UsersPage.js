import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import ChartRenderer from "../components/ChartRenderer";
import Dashboard from "../components/Dashboard";
import DashboardItem from "../components/DashboardItem";
const DashboardItems = [
  {
    id: 0,
    name: "Users by Company",
    vizState: {
      query: {
        measures: ["Users.count"],
        timeDimensions: [
          {
            dimension: "Users.createdAt",
            dateRange: "Last month"
          }
        ],
        dimensions: ["Users.company"],
        filters: []
      },
      chartType: "pie"
    }
  },
  {
    id: 0,
    name: "Users by City",
    vizState: {
      query: {
        measures: ["Users.count"],
        timeDimensions: [
          {
            dimension: "Users.createdAt",
            dateRange: "Last month"
          }
        ],
        dimensions: ["Users.city"],
        filters: []
      },
      chartType: "pie"
    }
  }
];

const filteredDashboardItems = (dashboardItems, statusFilter) => {
  if (statusFilter === "all") {
    return dashboardItems;
  }

  const statusFilterObj = {
    member: "Users.gender",
    operator: "equals",
    values: [statusFilter]
  };
  return dashboardItems.map(({ vizState, ...dashboardItem }) => ({
    ...dashboardItem,
    vizState: {
      ...vizState,
      query: {
        ...vizState.query,
        filters: [...(vizState.query.filters || []), statusFilterObj]
      }
    }
  }));
};

const UsersPage = () => {
  const [statusFilter, setStatusFilter] = useState("all");

  const dashboardItem = item => (
    <Grid item xs={12} lg={6} key={item.id}>
      <DashboardItem title={item.name}>
        <ChartRenderer vizState={item.vizState} />
      </DashboardItem>
    </Grid>
  );

  const Empty = () => (
    <div
      style={{
        textAlign: "center",
        padding: 12
      }}
    >
      <Typography variant="h5" color="inherit">
        There are no charts on this dashboard. Use Playground Build to add one.
      </Typography>
    </div>
  );

  return DashboardItems.length ? (
    [
      <ButtonGroup
        style={{
          padding: "24px 24px 0 24px"
        }}
        color="primary"
      >
        {["all", "female", "male"].map(value => (
          <Button
            variant={value === statusFilter ? "contained" : ""}
            onClick={() => setStatusFilter(value)}
          >
            {value.toUpperCase()}
          </Button>
        ))}
      </ButtonGroup>,
      <Dashboard>
        {filteredDashboardItems(DashboardItems, statusFilter).map(
          dashboardItem
        )}
      </Dashboard>
    ]
  ) : (
    <Empty />
  );
};

export default UsersPage;
