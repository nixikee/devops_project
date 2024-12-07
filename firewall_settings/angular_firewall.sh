#!/bin/bash

# Check if iptables is available
if ! command -v iptables &> /dev/null; then
    echo "iptables could not be found"
    exit 1
fi

# Flush existing rules
iptables -F

# Set default policies
iptables -P INPUT DROP
iptables -P FORWARD DROP
iptables -P OUTPUT ACCEPT

# Allow loopback
iptables -A INPUT -i lo -j ACCEPT

# Allow HTTP traffic
iptables -A INPUT -p tcp --dport 4200 -j ACCEPT

# Allow established connections (for two-way communication)
iptables -A INPUT -m state --state ESTABLISHED,RELATED -j ACCEPT

# Block ping (ICMP)
iptables -A INPUT -p icmp --icmp-type echo-request -j DROP

# Log dropped packets
iptables -A INPUT -j LOG --log-prefix "Angular Firewall: "

echo "Angular firewall rules applied successfully"