import { ZBClient } from "zeebe-node";

const zbc = new ZBClient('zeebe:26500');

zbc.createWorker({
  taskType: "fetch-goods-z",
  taskHandler: (job, complete) => {
    console.log("Fetch goods");
    complete.success();
  }
});

zbc.createWorker({
  taskType: "ship-goods-z",
  taskHandler: (job, complete) => {
    console.log("Ship goods");
    complete.success();
  }
});
