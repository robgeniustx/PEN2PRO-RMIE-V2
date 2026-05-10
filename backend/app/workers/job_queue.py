<<<<<<< HEAD
# TODO: integrate Celery/RQ later.
def enqueue_job(name, payload=None): return {'job_id': f'mock-{name}', 'status': 'queued', 'payload': payload}
def get_job_status(job_id): return {'job_id': job_id, 'status': 'mocked'}
def cancel_job(job_id): return {'job_id': job_id, 'status': 'cancelled'}
=======
# TODO job_queue
>>>>>>> main
