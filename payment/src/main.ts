import { ZBClient } from "zeebe-node";

const zbc = new ZBClient('zeebe:26500');

zbc.createWorker({
  taskType: "retrieve-payment-z",
  taskHandler: (job, complete) => {
    const { id, traceId, refId, amount } = job.variables;
    console.log(`Persisted order: ${id}`);
    complete.success();
  }
});
