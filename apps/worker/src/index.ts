import { Queue, Worker, QueueScheduler } from 'bullmq';
import IORedis from 'ioredis';


const connection = new IORedis(process.env.REDIS_URL || 'redis://localhost:6379');
const queueName = 'sync';


new QueueScheduler(queueName, { connection });
export const syncQueue = new Queue(queueName, { connection });


// Example worker: log jobs
new Worker(queueName, async (job) => {
console.log('Processing job', job.name, job.data);
}, { connection });


// Example ad-hoc job on boot
(async () => {
await syncQueue.add('hello', { msg: 'For Azeroth' });
})();