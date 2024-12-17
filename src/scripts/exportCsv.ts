interface ViolationNode {
    html: string;
    target: string[];
    any: Array<{ message: string }>;
    all: Array<{ message: string }>;
    none: Array<{ message: string }>;
    failureSummary?: string;
}

interface Violation {
    help: string;
    helpUrl: string;
    id: string;
    impact: string;
    tags: string[];
    description: string;
    nodes: ViolationNode[];
}

export function exportToCsv(results: { violations: Violation[] }, url: string) {
    // Prepare CSV header
    const headers = [
        "URL",
        "Rule ID",
        "Rule Description",
        "Help URL",
        "Impact",
        "WCAG Tags",
        "HTML Element",
        "Target",
        "Failure Summary",
        "Fix Suggestions",
        "Must Fix",
        "Should Fix"
    ];
    
    let csvContent = headers.join(',') + "\n";
    
    // Add each violation and its nodes to CSV
    results.violations.forEach(violation => {
        violation.nodes.forEach(node => {
            // Get all fix suggestions
            const fixSuggestions = node.any.map(fix => fix.message).join("; ");
            const mustFix = node.none.map(fix => fix.message).join("; ");
            const shouldFix = node.all.map(fix => fix.message).join("; ");
            
            // Filter WCAG tags
            const wcagTags = violation.tags
                .filter(tag => tag.includes('wcag') || tag === 'best-practice')
                .join(', ');
            
            // Escape fields that might contain commas or quotes
            const row = [
                url,
                violation.id,
                violation.description,
                violation.helpUrl,
                violation.impact,
                wcagTags,
                node.html,
                node.target.join(' '),
                node.failureSummary || '',
                fixSuggestions,
                mustFix,
                shouldFix
            ].map(field => {
                // Convert field to string and handle null/undefined
                const str = String(field || '');
                // Escape quotes and wrap in quotes if contains commas, quotes, or newlines
                return `"${str.replace(/"/g, '""')}"`;
            }).join(',');
            
            csvContent += row + "\n";
        });
    });
    
    // Create and trigger download
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement("a");
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    link.setAttribute("href", URL.createObjectURL(blob));
    link.setAttribute("download", `accessibility-scan-${timestamp}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
