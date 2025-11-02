import React from "react";
import Header from "./Header";
import { Outlet } from "react-router";

function RootLayout() {
	return (
		<>
			<Header />

			{/* <div className="min-h-screen"> */}
			{/* <div className="fixed top-0 right-0 left-0 z-50 flex h-[70px] items-center justify-between border-b border-[#F7F9FD] bg-white px-5 py-3 md:hidden"> */}
			{/* <MobileNavigation
						side="left"
						sheetIsOpen={sheetIsOpen}
						setSheetIsOpen={setSheetIsOpen}
						tag="dashboard"
					>
						<DashboardNavigation
							setSheetIsOpen={setSheetIsOpen}
							platform="mobile"
						/>
					</MobileNavigation>

					<DashboardLogo />

					<img
						src={
							!user.profileImageUrl ? "/Frame 43596.svg" : user.profileImageUrl
						}
						alt=""
					/> */}
			{/* </div> */}

			{/* <DashboardSidebarContainer>
					<div className="h-[70px] border-b border-gray-300 bg-white py-4 text-center">
						<DashboardLogo />
					</div>

					<DashboardNavigation
						setSheetIsOpen={setSheetIsOpen}
						platform="desktop"
					/>
				</DashboardSidebarContainer>

				<DashboardDesktopHeader>
					{communityName || taskTitle ? <BackButton /> : <Heading />}

					<div className="flex items-center gap-4">
						{currentPath === "communities" && !communityName && (
							<div className="hidden items-center gap-3 lg:flex lg:flex-row">
								<div>
									<CustomSearch placeholder="Search community" />
								</div>

								<div>
									<CreateCommunityForm />
								</div>
							</div>
						)}

						<img
							src={
								!user.profileImageUrl
									? "/Frame 43596.svg"
									: user.profileImageUrl
							}
							alt=""
						/>
					</div>
				</DashboardDesktopHeader>

				<DashboardContainer>
					<Outlet />
				</DashboardContainer> */}
			{/* </div> */}

			<Outlet />
		</>
	);
}

export default RootLayout;
