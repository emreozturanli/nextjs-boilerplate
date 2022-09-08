import { useAppDispatch, useAppSelector } from "@/store/store";
import { helloWorld } from "@/store/reducers/ui/dashboard";
import type { NextPage } from "next";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { dashboardExampleAsyncAction } from "@/store/asyncActions/dashboard";

const Dashboard: NextPage = () => {
	const { t } = useTranslation();
	const dispatch = useAppDispatch();
	const { title } = useAppSelector((state) => state.ui.dashboard);
	const { fetchDasboardStatus, dummyResponse } = useAppSelector((state) => state.api.dashboard);

	useEffect(() => {
		dispatch(dashboardExampleAsyncAction());
		dispatch(
			helloWorld(
				t("dashboardExampleKey", {
					ns: "dashboard",
				})
			)
		);
	}, []);

	if (fetchDasboardStatus === "loading") {
		return <div>loading</div>;
	}

	return (
		<div>
			{title} --- {dummyResponse}
		</div>
	);
};

export default Dashboard;
