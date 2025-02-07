<%@ Page Title="" Language="C#" MasterPageFile="~/Master1.Master" AutoEventWireup="true" CodeBehind="wallstreet.aspx.cs" Inherits="DrorProject.pages.wallstreet" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <style>
        .toc {
            margin-bottom: 20px;
            padding: 10px;
            background: #f9f9f9;
            border: 1px solid #ddd;
            border-radius: 8px;
        }

            .toc a {
                display: block;
                margin: 5px 0;
                color: black;
            }

                .toc a:visited {
                    color: black;
                }

                .toc a:hover {
                    color: black;
                    text-decoration: underline;
                }

        .carousel {
            position: relative;
            text-align: center;
            margin: 20px auto;
            max-width: 600px;
        }

            .carousel img {
                width: 100%;
                border-radius: 8px;
            }

            .carousel .prev, .carousel .next {
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
                background-color: rgba(0, 0, 0, 0.5);
                color: white;
                border: none;
                padding: 10px;
                cursor: pointer;
                border-radius: 50%;
            }

            .carousel .prev {
                left: 10px;
            }

            .carousel .next {
                right: 10px;
            }

                .carousel .prev:hover, .carousel .next:hover {
                    background-color: rgba(0, 0, 0, 0.8);
                }
    </style>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <div class="page-content">
        <h1>Wall Street</h1>
        <div class="toc">
            <h2>Menu</h2>
            <a href="#history">History of Wall Street</a>
            <a href="#landmarks">Landmarks</a>
            <a href="#significance">Significance of Wall Street</a>
            <a href="#modern">Modern Wall Street</a>
            <a href="#economic-impact">Economic Impact</a>
            <a href="#challenges">Challenges of Wall Street</a>
            <a href="#technology">Wall Street and Technology</a>
            <a href="#education">Education and Careers</a>
            <a href="#culture">Wall Street in Popular Culture</a>
            <a href="#future">Future of Wall Street</a>
            <a href="#visiting">Visiting Wall Street</a>
        </div>
        <div class="carousel">
            <button class="prev" onclick="changeSlide(-1)">&#10094;</button>
            <img id="carousel-image" src="/pictures/wallstreet1.png" alt="Wall Street Photo 1">
            <button class="next" onclick="changeSlide(1)">&#10095;</button>
        </div>

        <h2 id="history">History of Wall Street</h2>
        <p>The name "Wall Street" originates from a wall built by Dutch settlers in the 17th century to protect the colony of New Amsterdam from invasions. Over time, the street evolved into a center for commerce and trade, eventually becoming synonymous with the U.S. financial markets.</p>

        <h2 id="landmarks">Landmarks</h2>
        <p>Wall Street is famous for its landmarks, including:</p>
        <ul>
            <li><strong>The New York Stock Exchange (NYSE):</strong> The largest stock exchange in the world by market capitalization.</li>
            <li><strong>The Charging Bull:</strong> A bronze statue symbolizing financial strength and resilience, located in Bowling Green Park.</li>
            <li><strong>Federal Hall:</strong> The site where George Washington took his oath of office as the first President of the United States.</li>
        </ul>

        <h2 id="significance">Significance of Wall Street</h2>
        <p>Wall Street is not just a physical location; it represents the heart of the financial industry in the United States. It is synonymous with the stock market, investment banking, and economic power. The term "Wall Street" is often used as a metonym for the financial sector as a whole.</p>

        <h2 id="modern">Modern Wall Street</h2>
        <p>Today, Wall Street is home to leading financial firms, including investment banks, hedge funds, and asset management companies. Despite the rise of electronic trading and digital financial platforms, the area remains a vital center for global finance. The financial services sector contributes significantly to the U.S. economy, generating millions of jobs and substantial economic output.</p>

        <h2 id="economic-impact">Economic Impact</h2>
        <p>The financial activities on Wall Street have far-reaching effects, influencing global markets and economies. Major financial decisions, such as mergers, acquisitions, and IPOs, often originate here. The stock market performance is frequently viewed as an indicator of the overall economic health of the country.</p>

        <h2 id="challenges">Challenges of Wall Street</h2>
        <p>Over the years, Wall Street has faced various challenges, including market crashes, scandals, and public criticism. Events like the 1929 Stock Market Crash, the 2008 Financial Crisis, and instances of corporate fraud have led to increased scrutiny and calls for regulatory reforms.</p>

        <h2 id="technology">Wall Street and Technology</h2>
        <p>The rise of technology has transformed Wall Street, with electronic trading, high-frequency trading, and fintech companies reshaping the financial landscape. These advancements have made trading faster and more efficient but have also introduced new risks and complexities.</p>

        <h2 id="education">Education and Careers</h2>
        <p>Wall Street is a dream destination for many aspiring finance professionals. Careers in investment banking, equity research, trading, and financial analysis are highly sought after. Many universities and business schools offer specialized programs to prepare students for these roles.</p>

        <h2 id="culture">Wall Street in Popular Culture</h2>
        <p>Wall Street has been featured prominently in films, books, and television shows, reflecting its importance and allure. Movies like "Wall Street" (1987) and "The Wolf of Wall Street" (2013) showcase the high-stakes world of finance, often dramatizing its risks and rewards.</p>

        <h2 id="future">Future of Wall Street</h2>
        <p>As the global economy evolves, Wall Street will continue to adapt to new challenges and opportunities. The rise of sustainable investing, cryptocurrency, and globalization are shaping the future of the financial industry. Wall Street's ability to innovate will determine its continued relevance on the global stage.</p>

        <h2 id="visiting">Visiting Wall Street</h2>
        <p>Visitors to Wall Street can explore its historic sites, take photos with the Charging Bull, and enjoy the vibrant atmosphere of the financial district. Guided tours are also available for those interested in learning more about its history and significance. Other nearby attractions include the 9/11 Memorial & Museum and Battery Park, which offers stunning views of the Statue of Liberty.</p>

        <p>For more information, visit the <a href="https://www.nyse.com">official NYSE website</a> or the <a href="https://www.nasdaq.com">NASDAQ website</a>.</p>
    </div>
    <script>
        const images = ["/pictures/wallstreet1.png", "/pictures/wallstreet2.png", "/pictures/wallstreet_bull.png"];
        let currentIndex = 0;

        function changeSlide(direction) {
            currentIndex = (currentIndex + direction + images.length) % images.length;
            document.getElementById('carousel-image').src = images[currentIndex];
        }
    </script>
</asp:Content>
