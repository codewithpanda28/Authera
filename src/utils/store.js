export const saveSubmission = (type, data) => {
  try {
    const submissions = JSON.parse(localStorage.getItem('submissions') || '[]');
    const newSubmission = {
      id: Date.now(),
      type,
      data,
      timestamp: new Date().toISOString(),
      status: 'pending'
    };
    submissions.push(newSubmission);
    localStorage.setItem('submissions', JSON.stringify(submissions));
    return newSubmission;
  } catch (error) {
    console.error('Error saving submission:', error);
    return null;
  }
};

export const getSubmissions = () => {
  try {
    return JSON.parse(localStorage.getItem('submissions') || '[]');
  } catch (error) {
    console.error('Error getting submissions:', error);
    return [];
  }
};

export const clearSubmissions = () => {
  try {
    localStorage.removeItem('submissions');
    return true;
  } catch (error) {
    console.error('Error clearing submissions:', error);
    return false;
  }
};

