import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const ROICalculator = ({ onClose }) => {
  const [inputs, setInputs] = useState({
    employees: '',
    hourlyRate: '',
    hoursPerWeek: '',
    processEfficiency: '60'
  });
  
  const [results, setResults] = useState(null);
  const [currentStep, setCurrentStep] = useState(1);

  const handleInputChange = (field, value) => {
    setInputs(prev => ({ ...prev, [field]: value }));
  };

  const calculateROI = () => {
    const employees = parseInt(inputs?.employees) || 0;
    const hourlyRate = parseInt(inputs?.hourlyRate) || 0;
    const hoursPerWeek = parseInt(inputs?.hoursPerWeek) || 0;
    const efficiency = parseInt(inputs?.processEfficiency) || 60;

    const currentWeeklyCost = employees * hourlyRate * hoursPerWeek;
    const currentMonthlyCost = currentWeeklyCost * 4.33;
    const currentYearlyCost = currentMonthlyCost * 12;

    const timeSavedPercentage = efficiency / 100;
    const weeklySavings = currentWeeklyCost * timeSavedPercentage;
    const monthlySavings = weeklySavings * 4.33;
    const yearlySavings = monthlySavings * 12;

    const implementationCost = employees * 50000; // ₹50k per employee
    const monthsToBreakeven = implementationCost / monthlySavings;

    setResults({
      currentMonthlyCost: Math.round(currentMonthlyCost),
      monthlySavings: Math.round(monthlySavings),
      yearlySavings: Math.round(yearlySavings),
      implementationCost: Math.round(implementationCost),
      monthsToBreakeven: Math.round(monthsToBreakeven * 10) / 10,
      roi: Math.round(((yearlySavings - implementationCost) / implementationCost) * 100)
    });
    
    setCurrentStep(2);
  };

  const resetCalculator = () => {
    setInputs({
      employees: '',
      hourlyRate: '',
      hoursPerWeek: '',
      processEfficiency: '60'
    });
    setResults(null);
    setCurrentStep(1);
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
              <Icon name="Calculator" size={20} color="white" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-primary">AI Automation ROI Calculator</h2>
              <p className="text-sm text-text-secondary">Calculate your potential savings in 2 minutes</p>
            </div>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="text-text-secondary hover:text-primary"
          >
            <Icon name="X" size={20} />
          </Button>
        </div>

        {/* Progress Indicator */}
        <div className="px-6 py-4 bg-muted/50">
          <div className="flex items-center space-x-4">
            <div className={`flex items-center space-x-2 ${currentStep >= 1 ? 'text-accent' : 'text-text-secondary'}`}>
              <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-semibold ${
                currentStep >= 1 ? 'bg-accent text-white' : 'bg-gray-200 text-text-secondary'
              }`}>
                1
              </div>
              <span className="text-sm font-medium">Input Details</span>
            </div>
            <div className="flex-1 h-px bg-gray-200">
              <div className={`h-full bg-accent transition-all duration-500 ${currentStep >= 2 ? 'w-full' : 'w-0'}`}></div>
            </div>
            <div className={`flex items-center space-x-2 ${currentStep >= 2 ? 'text-accent' : 'text-text-secondary'}`}>
              <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-semibold ${
                currentStep >= 2 ? 'bg-accent text-white' : 'bg-gray-200 text-text-secondary'
              }`}>
                2
              </div>
              <span className="text-sm font-medium">View Results</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {currentStep === 1 ? (
            <div className="space-y-6">
              <div className="text-center mb-6">
                <h3 className="text-lg font-semibold text-primary mb-2">Tell us about your current processes</h3>
                <p className="text-text-secondary">We'll calculate your potential automation savings</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <Input
                  label="Number of Employees"
                  type="number"
                  placeholder="e.g., 50"
                  value={inputs?.employees}
                  onChange={(e) => handleInputChange('employees', e?.target?.value)}
                  description="Employees involved in manual processes"
                  required
                />

                <Input
                  label="Average Hourly Rate (₹)"
                  type="number"
                  placeholder="e.g., 500"
                  value={inputs?.hourlyRate}
                  onChange={(e) => handleInputChange('hourlyRate', e?.target?.value)}
                  description="Average cost per hour per employee"
                  required
                />

                <Input
                  label="Manual Process Hours/Week"
                  type="number"
                  placeholder="e.g., 20"
                  value={inputs?.hoursPerWeek}
                  onChange={(e) => handleInputChange('hoursPerWeek', e?.target?.value)}
                  description="Hours spent on repetitive tasks"
                  required
                />

                <Input
                  label="Target Automation Efficiency (%)"
                  type="number"
                  placeholder="60"
                  value={inputs?.processEfficiency}
                  onChange={(e) => handleInputChange('processEfficiency', e?.target?.value)}
                  description="Expected time savings percentage"
                  min="10"
                  max="95"
                />
              </div>

              <div className="bg-muted/50 rounded-lg p-4">
                <div className="flex items-start space-x-3">
                  <Icon name="Info" size={20} className="text-accent mt-0.5" />
                  <div className="text-sm text-text-secondary">
                    <p className="font-medium text-primary mb-1">Industry Benchmarks:</p>
                    <ul className="space-y-1">
                      <li>• Data Entry: 80-90% automation efficiency</li>
                      <li>• Report Generation: 70-85% efficiency</li>
                      <li>• Customer Support: 60-75% efficiency</li>
                      <li>• Invoice Processing: 85-95% efficiency</li>
                    </ul>
                  </div>
                </div>
              </div>

              <Button
                variant="default"
                size="lg"
                className="w-full bg-gradient-to-r from-primary to-secondary"
                onClick={calculateROI}
                disabled={!inputs?.employees || !inputs?.hourlyRate || !inputs?.hoursPerWeek}
                iconName="ArrowRight"
                iconPosition="right"
              >
                Calculate My ROI
              </Button>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="text-center mb-6">
                <h3 className="text-lg font-semibold text-primary mb-2">Your AI Automation ROI Results</h3>
                <p className="text-text-secondary">Based on your current processes and industry benchmarks</p>
              </div>

              {/* Key Metrics */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-lg p-4 border border-accent/20">
                  <div className="flex items-center space-x-2 mb-2">
                    <Icon name="TrendingUp" size={20} className="text-accent" />
                    <span className="text-sm font-medium text-accent">Monthly Savings</span>
                  </div>
                  <div className="text-2xl font-bold text-primary">₹{results?.monthlySavings?.toLocaleString('en-IN')}</div>
                </div>

                <div className="bg-gradient-to-br from-success/10 to-success/5 rounded-lg p-4 border border-success/20">
                  <div className="flex items-center space-x-2 mb-2">
                    <Icon name="Calendar" size={20} className="text-success" />
                    <span className="text-sm font-medium text-success">Yearly Savings</span>
                  </div>
                  <div className="text-2xl font-bold text-primary">₹{results?.yearlySavings?.toLocaleString('en-IN')}</div>
                </div>

                <div className="bg-gradient-to-br from-warning/10 to-warning/5 rounded-lg p-4 border border-warning/20">
                  <div className="flex items-center space-x-2 mb-2">
                    <Icon name="Clock" size={20} className="text-warning" />
                    <span className="text-sm font-medium text-warning">Breakeven Period</span>
                  </div>
                  <div className="text-2xl font-bold text-primary">{results?.monthsToBreakeven} months</div>
                </div>

                <div className="bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-lg p-4 border border-secondary/20">
                  <div className="flex items-center space-x-2 mb-2">
                    <Icon name="Target" size={20} className="text-secondary" />
                    <span className="text-sm font-medium text-secondary">Annual ROI</span>
                  </div>
                  <div className="text-2xl font-bold text-primary">{results?.roi}%</div>
                </div>
              </div>

              {/* Detailed Breakdown */}
              <div className="bg-muted/30 rounded-lg p-4">
                <h4 className="font-semibold text-primary mb-3">Cost Breakdown</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-text-secondary">Current Monthly Cost:</span>
                    <span className="font-medium">₹{results?.currentMonthlyCost?.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-secondary">Implementation Cost:</span>
                    <span className="font-medium">₹{results?.implementationCost?.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="flex justify-between text-accent font-semibold">
                    <span>Net Annual Benefit:</span>
                    <span>₹{(results?.yearlySavings - results?.implementationCost)?.toLocaleString('en-IN')}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  variant="default"
                  className="flex-1 bg-gradient-to-r from-primary to-secondary"
                  onClick={onClose}
                  iconName="Calendar"
                  iconPosition="left"
                >
                  Book Strategy Call
                </Button>
                <Button
                  variant="outline"
                  className="flex-1"
                  onClick={resetCalculator}
                  iconName="RotateCcw"
                  iconPosition="left"
                >
                  Recalculate
                </Button>
              </div>

              <div className="text-center text-xs text-text-secondary">
                * Results are estimates based on industry benchmarks and your inputs. 
                Actual results may vary based on specific implementation and processes.
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ROICalculator;