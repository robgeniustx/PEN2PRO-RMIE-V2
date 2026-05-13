from app.agents.follow_up_agent import FollowUpAgent


def main():
    agent = FollowUpAgent()
    # Load leads/customers from database here
    # Run only for users with pro/elite access
    # Save generated follow-up messages as drafts
    print("Daily follow-up agent completed")


if __name__ == "__main__":
    main()
