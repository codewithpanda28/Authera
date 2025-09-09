export const saveSubmission = (key, data) => {
  try {
    const existingRaw = localStorage.getItem(key);
    const existing = existingRaw ? JSON.parse(existingRaw) : [];
    const record = { id: Date.now(), createdAt: new Date().toISOString(), ...data };
    const updated = [record, ...existing];
    localStorage.setItem(key, JSON.stringify(updated));
    return record;
  } catch (error) {
    // noop
    return null;
  }
};

export const loadSubmissions = (key) => {
  try {
    const existingRaw = localStorage.getItem(key);
    return existingRaw ? JSON.parse(existingRaw) : [];
  } catch (error) {
    return [];
  }
};

