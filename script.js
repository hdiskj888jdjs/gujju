document.addEventListener("DOMContentLoaded", () => {
    const skills = document.querySelectorAll(".skill-card");
    skills.forEach(skill => {
        skill.addEventListener("mouseover", () => {
            skill.style.transform = "scale(1.1) rotateX(0deg) rotateY(0deg)";
            skill.style.boxShadow = "0 10px 20px rgba(0, 255, 153, 0.6)";
        });
        skill.addEventListener("mouseout", () => {
            skill.style.transform = "scale(1) rotateX(20deg) rotateY(-10deg)";
            skill.style.boxShadow = "0 5px 15px rgba(0, 255, 153, 0.4)";
        });
    });

    console.log("Portfolio Loaded: Ethical Hacker 3D Animation");
});

        if (subdomains.length > 0) {
            outputDiv.innerHTML = subdomains.map(subdomain => `<p>${subdomain}</p>`).join('');
            downloadBtn.style.display = 'block';
            downloadBtn.onclick = () => downloadSubdomains(subdomains);
        } else {
            outputDiv.innerHTML = '<p>No subdomains found.</p>';
        }
    } catch (error) {
        outputDiv.innerHTML = '<p>Error fetching subdomains. Please try again.</p>';
    }
});

// Simulate an API call to fetch subdomains
async function fetchSubdomains(domain) {
    // Replace with your actual logic or API
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                `www.${domain}`,
                `mail.${domain}`,
                `shop.${domain}`,
                `blog.${domain}`
            ]);
        }, 2000);
    });
}

// Download subdomains as a text file
function downloadSubdomains(subdomains) {
    const blob = new Blob([subdomains.join('\n')], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'subdomains.txt';
    link.click();
}