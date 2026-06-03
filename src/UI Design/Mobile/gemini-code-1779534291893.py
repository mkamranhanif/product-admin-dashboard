import os
from weasyprint import HTML

html_content = """
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>The Developer's Debugging Blueprint</title>
    <style>
        @page {
            size: A4;
            margin: 20mm 15mm;
            background-color: #f8fafc;
        }
        *, *::before, *::after {
            box-sizing: border-box;
        }
        body {
            margin: 0;
            padding: 0;
            font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
            color: #334155;
            background-color: #f8fafc;
        }
        .header-banner {
            margin: -20mm -15mm 20px -15mm;
            padding: 25mm 20mm 15mm 20mm;
            background-color: #0f172a;
            color: #ffffff;
        }
        .header-banner h1 {
            margin: 0;
            font-size: 26pt;
            color: #ffffff;
            border: none;
            padding: 0;
        }
        .header-banner p {
            margin: 10px 0 0 0;
            font-size: 12pt;
            color: #94a3b8;
        }
        h2 {
            font-size: 16pt;
            color: #0f172a;
            border-left: 5px solid #2563eb;
            padding-left: 12px;
            margin-top: 1.5em;
            page-break-after: avoid;
        }
        p, li {
            font-size: 11pt;
            line-height: 1.6;
        }
        ul {
            padding-left: 20px;
        }
        li {
            margin-bottom: 8px;
        }
        .step-container {
            background-color: #ffffff;
            border: 1px solid #e2e8f0;
            padding: 20px;
            border-radius: 8px;
            margin-bottom: 25px;
            page-break-inside: avoid;
        }
        .step-number {
            display: inline-block;
            background-color: #2563eb;
            color: white;
            font-weight: bold;
            padding: 4px 10px;
            border-radius: 4px;
            margin-bottom: 10px;
            font-size: 10pt;
        }
        .step-title {
            font-size: 14pt;
            font-weight: bold;
            color: #0f172a;
            margin: 0 0 10px 0;
        }
        .highlight-box {
            background-color: #eff6ff;
            border-left: 4px solid #3b82f6;
            padding: 15px;
            margin-top: 15px;
            border-radius: 0 6px 6px 0;
            font-size: 10pt;
        }
    </style>
</head>
<body>

    <div class="header-banner">
        <h1>The Debugging Blueprint</h1>
        <p>A structured, engineering-first approach to unblocking complex logic and surviving the "stuck" moments.</p>
    </div>

    <div class="step-container">
        <div class="step-number">STEP 1</div>
        <h3 class="step-title">Step Away from the Framework (Pseudocode & Paper)</h3>
        <p>When the logic feels overwhelming, trying to solve it directly in React syntax will only compound the confusion. Before writing a single hook, strip the framework away. Define the inputs, the expected outputs, and the exact transformations required in plain English.</p>
        <p>If you are writing logic to validate complex structures or evaluate strict conditions, diagramming the logic flow on paper ensures your mental model is accurate before syntax gets in the way.</p>
        <div class="highlight-box">
            <strong>Actionable Move:</strong> Write out the problem sequentially. E.g., "1. Take the array. 2. Remove items not matching category X. 3. Sort remaining items alphabetically by title."
        </div>
    </div>

    <div class="step-container">
        <div class="step-number">STEP 2</div>
        <h3 class="step-title">Isolate the Logic in a Sandbox</h3>
        <p>Testing unproven logic inside a massive UI component makes it impossible to tell if the failure is caused by your algorithm or by the React rendering cycle. You must isolate the exact point of failure. Extract the problem function and test it independently.</p>
        <div class="highlight-box">
            <strong>Actionable Move:</strong> Open an empty JavaScript file or a browser console. Create a tiny, hardcoded dummy array (3 items max). Run your array methods (.filter, .sort, .slice) there. Once it outputs the exact expected result in isolation, port it back into the main application.
        </div>
    </div>

    <div class="step-container">
        <div class="step-number">STEP 3</div>
        <h3 class="step-title">Track the Data Flow Ruthlessly</h3>
        <p>Most "stuck" moments happen because the data flowing through the application is not what you assume it is. An object might be undefined, a number might actually be a string, or an array might be nested inside another object.</p>
        <p>Just like writing automated evaluation scripts to grade outputs against ground truths, your debugging needs a methodical verification process. Do not guess; verify.</p>
        <div class="highlight-box">
            <strong>Actionable Move:</strong> Drop <code>console.log()</code> statements at every major pipeline intersection. Log the data immediately after it is fetched, immediately before it enters a filter function, and immediately after it exits.
        </div>
    </div>

    <div class="step-container">
        <div class="step-number">STEP 4</div>
        <h3 class="step-title">Prompt Like an Engineer</h3>
        <p>When leveraging Large Language Models to get unstuck, never ask for the final code. Architecting prompts precisely ensures you receive architectural guidance rather than copy-paste templates that break your application's context.</p>
        <div class="highlight-box">
            <strong>Actionable Move:</strong> Frame your prompts around concepts and constraints. Example: "I have a deeply nested JavaScript object representing table state. I need to update one specific key without mutating the original object. What is the most efficient modern JS approach for this?"
        </div>
    </div>

    <div class="step-container">
        <div class="step-number">STEP 5</div>
        <h3 class="step-title">Enforce the 30-Minute Rule</h3>
        <p>Staring at the same block of code for extended periods leads to tunnel vision. If you have spent 30 uninterrupted minutes on a single bug without progress, you are no longer productive; you are just frustrated.</p>
        <div class="highlight-box">
            <strong>Actionable Move:</strong> Force a context switch. Work on styling a completely different component with Tailwind, review documentation, or step away from the keyboard entirely. The brain often synthesizes the solution when you stop actively forcing it.
        </div>
    </div>

</body>
</html>
"""

with open('/tmp/debugging_blueprint.html', 'w', encoding='utf-8') as f:
    f.write(html_content)

HTML(filename='/tmp/debugging_blueprint.html').write_pdf('/mnt/data/Debugging_Blueprint.pdf')