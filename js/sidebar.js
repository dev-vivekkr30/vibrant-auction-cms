class CustomSidebar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
                    <div class="sidebar">
                <div class="menu-btn"><i class="bi bi-list"></i></div>
                <div class="head">
                    <div class="user-img">
                        <img src="../images/logo.svg" alt="">
                    </div>
                </div>
                <div class="nav">
                    <div class="menu w-100">
                        <ul class="p-0">
                            <li class="active"><a href="dashboard.html"><i class="bi bi-house"></i><span class="text">Dashboard</span></a></li>
                            <li><a href="#"><i class="bi bi-database"></i><span class="text">Masters</span><i class="arrow ph-bold ph-caret-down"></i></a>
                                <ul class="sub-menu">
                                    <li><a href="cities.html"><span class="text">Cities</span></a></li>
                                    <li><a href="borrowerName.html"><span class="text">Borrower Name</span></a></li>
                                    <li><a href="assetType.html"><span class="text">Asset Type</span></a></li>
                                    <li><a href="assetDetails.html"><span class="text">Asset Details</span></a></li>
                                    <li><a href="institutionsBankName.html"><span class="text">Institutions/Bank Name</span></a></li>
                                </ul>
                            </li>
                            <li><a href="users.html"><i class="bi bi-people"></i><span class="text">Users</span></a></li>
                            <li><a href="manageProperties.html"><i class="bi bi-building-add"></i><span class="text">Manage Property</span></a></li>
                            <li><a href="package.html"><i class="bi bi-building-add"></i><span class="text">Packages</span></a></li>
                            <li><a href="subscribers.html"><i class="bi bi-box2"></i><span class="text">Subscribers</span></a></li>
                            <li><a href="#"><i class="bi bi-database"></i><span class="text">Reports</span><i class="arrow ph-bold ph-caret-down"></i></a>
                                <ul class="sub-menu">
                                    <li><a href="usersReport.html"><span class="text">Users</span></a></li>
                                    <li><a href="subscribersReport.html"><span class="text">Subscribers</span></a></li>
                                    <li><a href="propertyReport.html"><span class="text">Property</span></a></li>
                                </ul>
                            </li>
                            <li><a href="adManagement.html"><i class="bi bi-receipt-cutoff"></i><span class="text">Ad Management</span></a></li>
                            <li><a href="#"><i class="bi bi-database"></i><span class="text">CMS</span><i class="arrow ph-bold ph-caret-down"></i></a>
                                <ul class="sub-menu">
                                    <li><a href="faq.html"><span class="text">FAQ</span></a></li>
                                    <li><a href="contact.html"><span class="text">Contact Us</span></a></li>
                                    <li><a href="propertyRequest.html"><span class="text">Property Request</span></a></li>
                                    <li><a href="enquiry.html"><span class="text">Enquiry</span></a></li>
                                </ul>
                            </li>
                            <li><a href="aboutCompany.html"><i class="bi bi-receipt-cutoff"></i><span class="text">About Company</span></a></li>
                        </ul>
                    </div>
                </div>
            </div>

        
        `;
    }
}

customElements.define("custom-sidebar", CustomSidebar);